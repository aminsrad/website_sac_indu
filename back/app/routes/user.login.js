module.exports = (app) => {
  const express = require("express");
  const router = express.Router();

  router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(401).json({ message: "Authentication failed1" });
      }
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordMatch) {
        return res.status(401).json({ message: "Authentication failed2" });
      }
      const token = jwt.sign({ userId: user._id }, "your-secret-key", {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Error logging in" });
    }
  });

  app.use("/api", router);
};
