// Send every other request to the React app
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Define any API routes before this runs
// router.use("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

  // API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
