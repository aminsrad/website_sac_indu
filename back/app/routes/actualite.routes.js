const multer = require("multer");

const db = require("../models");
const Actualite = db.actualites;

module.exports = (app) => {
  const actualites = require("../controllers/actualite.controller");

  var router = require("express").Router();

  //const DIR = "/back/app/loaded_images";
  const storage = multer.diskStorage({
    destination: "images_uploaded",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });

  // Create a new actualite
  //router.post("/", actualites.create);
  //router.post("/", upload.single("image"), actualites.create);
  router.post("/", upload.single("image"), (req, res) => {
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Assuming you want to create an Actualite object with the uploaded file's information
    // const actualite = new Actualite({
    //   title: req.body.title,
    //   image: {
    //     data: req.file.filename,
    //     contentType: "image/jpeg",
    //   }, // This will be the name of the uploaded file
    //   description: req.body.description,
    //   published: req.body.published ? req.body.published : false,
    // });
    const actualite = new Actualite({
      title: req.body.title,
      image: {
        data: req.file.filename,
        contentType: "image/jpeg",
      }, // This will be the name of the uploaded file}

      description: req.body.description,
      published: req.body.published ? req.body.published : false,
    });
    // Save articale in the database
    actualite
      .save(actualite)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the articale.",
        });
      });
  });
  //**************************
  // Retrieve all actualites
  router.get("/", actualites.findAll);

  // Retrieve all published actualites
  router.get("/published", actualites.findAllPublished);

  // Retrieve a single actualite with id
  router.get("/:id", actualites.findOne);

  // Update a actualite with id
  router.put("/:id", actualites.update);

  // Delete a actualite with id
  router.delete("/:id", actualites.delete);

  // Create a new actualite
  router.delete("/", actualites.deleteAll);

  app.use("/api/actualites", router);
};
