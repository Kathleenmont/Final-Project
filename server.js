const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("express").Router();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");
const path = require("path");
require("dotenv").config();
const tempApiKey = process.env.APIKeyYelp;

// ADDED passport_________________
// var bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");
var db = require("./models");
var isAuthenticated = require("./config/middleware/isAuthenticated");
// -----------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// passport__________________________________
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// _________________________________________________

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// -------test route---------
// app.get("/blah", function(req, res) {
//   res.json("blah route");
// });

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

app.post("/api/user", function(req, res) {
  console.log(JSON.stringify(req.body));
  db.User.findOne({
    where: { userName: req.body.userName, password: req.body.password }
  }).then(function(dbPost) {
    res.json(dbPost);
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
  db.User.create(req.body).then(function(dbPost) {
    res.json(dbPost);
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
        // console.log(res.data + "else not undefined or less than 3")
        res.json(searchResult.data);
      }
      // console.log(searchResult.data);
      // res.json(searchResult.data);
    })
    .catch(
      (err) => {
        res.status(500).send(err.message)
      }
    );
});

// app.post("/searchtype", (req, res) => {
//   axios
//     .get(
//       "https://api.yelp.com/v3/businesses/search?term=" +
//         req.body.search +
//         "&limit=6&location=philadelphia",
//       {
//         headers: {
//           Authorization: tempApiKey
//         }
//       }
//     )
//     .then(searchResult => {
//       console.log(searchResult.data);
//       res.json(searchResult.data);
//     });
// });

// moved from routes index.js-------------------------------------------------
// app.get("/", function(req, res) {
//   // If the user already has an account send them to the members page
//   // if (req.user) {
//   //   res.redirect("/members");
//   // }

//   // send them to react search page

//   // res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   res.send("index root route")
// });

app.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    // res.redirect("/saved");
  }
  res.sendFile(path.join(__dirname, "./client/public/login.html"));
  // res.send("lalalal")
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
app.get("/saved", isAuthenticated, function(req, res) {
  console.log("here!!!");
  // maybe take out and put call to api routing instead for users id
  // get calling get on the user id findById Foodscontroller
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// from routes/api/index file -------------------------------------------------------------

app.post("/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json("/saved");
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
app.post("/signup", function(req, res) {
  console.log(req.body);
  db.User.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.redirect(307, "/login");
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
});

// Route for logging user out
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
app.get("/user_data", function(req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      userName: req.user.userName,
      email: req.user.email,
      //   important id will use for models
      id: req.user.id
    });
  }
});

// test over

// app.use(routes);

var syncOptions = { force: true };

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

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fooddb", { useNewUrlParser: true })

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
