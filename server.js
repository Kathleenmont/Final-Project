const express = require("express");
const bodyParser = require("body-parser");
const router = require("express").Router();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
const path = require("path");
require("dotenv").config();
const tempApiKey = process.env.APIKeyYelp;
var db = require("./models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


// routes---------------------------------------
app.get("/api/foods", function(req, res) {
  db.Food.findAll({}).then(function(dbPost) {
    res.json(dbPost);
  });
});

app.post("/api/foods/country", function(req, res) {
  db.Food.findAll({ where: { country: req.body.coun } }).then(function(dbPost) {
    res.json(dbPost);
  });
});


  //... fetch user from a db etc.
  //communicate to the db to find the username from the db

app.post("/api/user", function(req, res) {
  console.log(JSON.stringify(req.body));
  const username = req.body.userName;
  const password = req.body.password;
  db.User.findOne({
    where: { userName: username }
  }).then(function(user) {
    if(!user) {
      res.json(null);
    } else {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result == true) {
          res.json(user);
        } else {
          res.json(null)
        }
      });
    }
});
});

app.post("/api/username", function(req, res) {
  console.log(JSON.stringify(req.body));
  db.User.findOne({ where: { userName: req.body.userName } }).then(function(
    dbPost
  ) {
    res.json(dbPost);
  });
});

app.post("/api/foods/save", function(req, res) {
  console.log(JSON.stringify(req.body));
  db.UsersFood.create({
    userId: req.body.userId,
    foodId: req.body.foodId,
    tried: false
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

app.post("/api/foods/delete", function(req, res) {
  console.log(JSON.stringify(req.body));
  db.UsersFood.destroy({
    where: {
      userId: req.body.userId,
      foodId: req.body.foodId
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

app.post("/api/foods/tried", function(req, res) {
  console.log(JSON.stringify(req.body));
  db.UsersFood.create({
    userId: req.body.userId,
    foodId: req.body.foodId,
    tried: true,
    rating: req.body.rating
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

app.post("/api/signup", function(req, res) {
  console.log(JSON.stringify(req.body));
  // console.log(hash)
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    db.User.create({"userName" : req.body.userName, "password": hash}).then(function(dbPost) {
      res.json(dbPost);
    });
});
 
});

app.post("/api/getsaved", function(req, res) {
  console.log(JSON.stringify(req.body));
  db.User.findAll({
    where: { id: req.body.userId },
    include: [{ model: db.Food, as: "Food" }]
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

app.post("/search", (req, res) => {
  axios
    .get(
      "https://api.yelp.com/v3/businesses/search?term=" +
        req.body.search +
        "&limit=6&location=philadelphia",
      {
        headers: {
          Authorization: tempApiKey
        }
      }
    )
    .then(searchResult => {
      // console.log("res.data" + res.data.businesses)
      if (searchResult.data === undefined || searchResult.data.businesses.length < 3 ) {
        axios.get(
          "https://api.yelp.com/v3/businesses/search?term=" +
            req.body.type +
            "%20food" +
            "&limit=6&location=philadelphia",
          {
            headers: {
              Authorization: tempApiKey
            }
          }
        ).then(searchResult => {
          console.log(searchResult.data + "yes undefined or less than 3")
          res.json(searchResult.data)
        })
        .catch(
          (err) => {
            res.status(500).send(err.message)
          }
        );

      } else {
        res.json(searchResult.data);
      }
    })
    .catch(
      (err) => {
        res.status(500).send(err.message)
      }
    );
});

// app.use(routes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models  sequalize
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});


