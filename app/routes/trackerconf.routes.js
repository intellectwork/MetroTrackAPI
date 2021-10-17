module.exports = app => {
  const trackerconf = require("../controllers/trackerconf.controller.js");

  var router = require("express").Router();

  // Create a new Trackerconf
  router.post("/", trackerconf.create);

  // Retrieve all Trackerconfs
  router.get("/", trackerconf.findAll);

  // Retrieve all published Trackerconfig
  router.get("/published", trackerconf.findAllPublished);

  // Retrieve a single Trackerconfig with id
  router.get("/:id", trackerconf.findOne);

  // Update a Trackerconfig with id
  router.put("/:id", trackerconf.update);

  // Delete a Trackerconfig with id
  router.delete("/:id", trackerconf.delete);

  // Delete all Trackerconfigs
  router.delete("/", trackerconf.deleteAll);

  app.use('/api/trackerconf', router);
};
