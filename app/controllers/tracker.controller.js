const db = require("../models");
const Tracker = db.tracker;
const Op = db.Sequelize.Op;

// Create and Save a new Tracker
exports.create = (req, res) => {
  // Validate request
  if (!req.body.vechileId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tracker
  const tracker = {
    vechileId: req.body.vechileId,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    published: req.body.published ? req.body.published : false
  };

  // Save Tracker in the database
  Tracker.create(tracker)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tracker."
      });
    });
};

// Retrieve all Tracker from the database.
exports.findAll = (req, res) => {
  const vechileId = req.query.vechileId;
  var condition = vechileId ? { vechileId: { [Op.like]: `%${vechileId}%` } } : null;

  Tracker.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tracker."
      });
    });
};
// Find a single Tracker with an id
exports.findOne = (req, res) => {
  const vechileId = req.params.vechileId;

  Tracker.findByPk(vechileId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tracker with vechileId=" + vechileId
      });
    });
};

// Update a Tracker by the id in the request
exports.update = (req, res) => {
  const vechileId = req.params.id;

  Tracker.update(req.body, {
    where: { vechileId: vechileId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tracker was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tracker with vechileId=${vechileId}. Maybe Tracker was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tracker with vechileId=" + vechileId
      });
    });
};

// Delete a Tracker with the specified id in the request
exports.delete = (req, res) => {
  const vechileId = req.params.vechileId;

  Tracker.destroy({
    where: { vechileId: vechileId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tracker was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tracker with vechileId=${vechileId}. Maybe Tracker was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tracker with vechileId=" + vechileId
      });
    });
};

// Delete all Tracker from the database.
exports.deleteAll = (req, res) => {
  Tracker.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tracker were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tracker."
      });
    });
};

// find all published Tracker
exports.findAllPublished = (req, res) => {
  Tracker.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tracker."
      });
    });
};
