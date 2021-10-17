const db = require("../models");
const Trackerconf = db.trackerconf;
const Op = db.Sequelize.Op;

// Create and Save a new Trackerconf
exports.create = (req, res) => {
  // Validate request
  if (!req.body.tracktime) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Trackerconf
  const trackerconf = {
    tracktime: req.body.tracktime,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Trackerconf in the database
  Trackerconf.create(trackerconf)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Trackerconf."
      });
    });
};

// Retrieve all Trackerconfs from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Trackerconf.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving trackerconfs."
      });
    });
};
// Find a single Trackerconf with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Trackerconf.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Trackerconf with id=" + id
      });
    });
};

// Update a Trackerconf by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Trackerconf.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Trackerconf was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Trackerconf with id=${id}. Maybe Trackerconf was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Trackerconf with id=" + id
      });
    });
};

// Delete a Trackerconf with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Trackerconf.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Trackerconf was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Trackerconf with id=${id}. Maybe Trackerconf was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Trackerconf with id=" + id
      });
    });
};

// Delete all Trackerconfs from the database.
exports.deleteAll = (req, res) => {
  Trackerconf.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Trackerconfs were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Trackerconfs."
      });
    });
};

// find all published Trackerconf
exports.findAllPublished = (req, res) => {
  Trackerconf.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving trackerconfs."
      });
    });
};
