const bcrypt = require("bcrypt");
const db = require("../models/index");
const User = db.users;
module.exports = (app) => {
  //   var router = require("express").Router();

  const express = require("express");
  const router = express.Router();

  router.post("/register", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error registering user" });
    }
  });
  app.use("/api", router);
};
