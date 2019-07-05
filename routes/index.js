// Send every other request to the React app
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const foodsController = require("../controllers/foodsController");

module.exports = function(router) {
  // API Routes
router.use("/api", apiRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

};

// module.exports = router;

module.exports = function(app) {
// passport-----------------------------------------------------
app.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  // if (req.user) {
  //   res.redirect("/members");
  // }
  
  // send them to react search page
  
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/saved");
  }
  res.sendFile(path.join(__dirname, "../client/public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/saved", isAuthenticated, function(req, res) {
  // maybe take out and put call to api routing instead for users id
  // get calling get on the user id findById Foodscontroller
    // res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

};
