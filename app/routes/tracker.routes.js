module.exports = app => {
  const tracker = require("../controllers/tracker.controller.js");

  var router = require("express").Router();

  // Create a new tracker
  router.post("/", tracker.create);

  // Retrieve all trackers
  router.get("/", tracker.findAll);

  // Retrieve all published trackerig
  router.get("/published", tracker.findAllPublished);

  // Retrieve a single trackerig with id
  router.get("/:id", tracker.findOne);

  // Update a trackerig with id
  router.put("/:id", tracker.update);

  // Delete a trackerig with id
  router.delete("/:id", tracker.delete);

  // Delete all trackerigs
  router.delete("/", tracker.deleteAll);

  app.use('/api/tracker', router);
};
