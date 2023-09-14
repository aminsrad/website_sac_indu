module.exports = (app) => {
  const products = require("../controllers/product.controller");

  var router = require("express").Router();

  // Create a new product

  router.post("/", products.create);

  // Retrieve all productss
  router.get("/", products.findAll);

  // Retrieve all published productss
  router.get("/published", products.findAllPublished);

  // Retrieve a single products with id
  router.get("/:id", products.findOne);

  // Update a products with id
  router.put("/:id", products.update);

  // Delete a products with id
  router.delete("/:id", products.delete);

  // Create a new products
  router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};
