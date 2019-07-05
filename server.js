const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
// ADDED passport_________________
// var bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");
var db = require("./models");
// -----------------------------------

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

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

app.use(routes);

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

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fooddb", { useNewUrlParser: true })



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



