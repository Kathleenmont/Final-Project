const router = require("express").Router();
var db = require("../models");
const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");
require("dotenv").config();
const tempApiKey = process.env.APIKeyYelp;
const bcrypt = require("bcrypt");
const saltRounds = 10;

// route that loads all foods
app.get("/api/foods", function(req, res) {
  db.Food.findAll({}).then(function(dbPost) {
    res.json(dbPost);
  });
});

// route that finds dishes from countries
app.post("/api/foods/country", function(req, res) {
  db.Food.findAll({ where: { country: req.body.coun } }).then(function(dbPost) {
    res.json(dbPost);
  });
});

// see if user name is in DB then
app.post("/api/user", function(req, res) {
  const username = req.body.userName;
  const password = req.body.password;
  db.User.findOne({
    where: { userName: username }
  }).then(function(user) {
    if (!user) {
      // if not user send null to client side
      res.json(null);
    } else {
      // if user in DB then check to see if passeord is correct and send response
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (result == true) {
          res.json(user);
        } else {
          res.json(null);
        }
      });
    }
  });
});

// checks if username is taken
app.post("/api/username", function(req, res) {
  db.User.findOne({ where: { userName: req.body.userName } }).then(function(
    dbPost
  ) {
    res.json(dbPost);
  });
});

// create/add a food to a users list by creating
// a post entry with the userID and FoodID to the usersFood table
app.post("/api/foods/save", function(req, res) {
  db.UsersFood.create({
    userId: req.body.userId,
    foodId: req.body.foodId,
    tried: 0
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

// delete route for taking food of users list
app.post("/api/foods/delete", function(req, res) {
  db.UsersFood.destroy({
    where: {
      userId: req.body.userId,
      foodId: req.body.foodId
    }
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

// Route for marking a users food as tried and adding a user rating
app.post("/api/foods/tried", function(req, res) {
  db.UsersFood.create({
    userId: req.body.userId,
    foodId: req.body.foodId,
    tried: 1,
    rating: req.body.rating
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

// route to signup new user/ hash the password
app.post("/api/signup", function(req, res) {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    db.User.create({ userName: req.body.userName, password: hash }).then(
      function(dbPost) {
        res.json(dbPost);
      }
    );
  });
});

// route to find foods saved to a particular user
app.post("/api/getsaved", function(req, res) {
  db.User.findAll({
    where: { id: req.body.userId },
    include: [{ model: db.Food, as: "Food" }]
  }).then(function(dbPost) {
    res.json(dbPost);
  });
});

// route to query yelp api
app.post("/search", (req, res) => {
  // make api call using dish name 
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
      if (
        // if couldn't find dish name or 2 or less result
        // make another api call using type of food instead of dish
        searchResult.data === undefined ||
        searchResult.data.businesses.length < 3
      ) {
        axios
          .get(
            "https://api.yelp.com/v3/businesses/search?term=" +
              req.body.type +
              "%20food" +
              "&limit=6&location=philadelphia",
            {
              headers: {
                Authorization: tempApiKey
              }
            }
          )
          .then(searchResult => {
            // send data back
            res.json(searchResult.data);
          })
          .catch(err => {
            res.status(500).send(err.message);
          });
      } else {
        // send data back
        res.json(searchResult.data);
      }
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
});


module.exports = app;

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
