const db = require("../models");
const Actualite = db.actualites;

// Add multer configuration at the top of the controller
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../loaded_images/"); // Set the destination folder here
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    const filename = `${Date.now()}${extname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

// Create and Save a new actualite
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a actualite
  const actualite = new Actualite({
    title: req.body.title,
    image: {
      data: req.body.image,
      contentType: "image/jpeg",
    },
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });

  // Save actualite in the database
  actualite
    .save(actualite)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the actualite.",
      });
    });
};

// Retrieve all actualites from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Actualite.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving actualites.",
      });
    });
};

// Find a single actualite with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Actualite.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found actualite with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving actualite with id=" + id });
    });
};

// Update a actualite by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Actualite.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update actualite with id=${id}. Maybe actualite was not found!`,
        });
      } else res.send({ message: "actualite was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating actualite with id=" + id,
      });
    });
};

// Delete a actualite with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Actualite.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete actualite with id=${id}. Maybe actualite was not found!`,
        });
      } else {
        res.send({
          message: "actualite was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete actualite with id=" + id,
      });
    });
};

// Delete all actualites from the database.
exports.deleteAll = (req, res) => {
  Actualite.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} actualites were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all actualites.",
      });
    });
};

// Find all published actualites
exports.findAllPublished = (req, res) => {
  Actualite.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving actualites.",
      });
    });
};
