module.exports = app => {
  const tracker = require("../controllers/tracker.controller.js");
  const trip = require("../controllers/trip.controller.js");

  var router = require("express").Router();

  

  // Retrieve all trackers
  router.get("/", trip.getTripStatus);

  
  app.use('/api/trip', router);
};
