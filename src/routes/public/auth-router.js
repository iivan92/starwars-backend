const express = require("express");
const router = express.Router();
const authController = require("../../controllers/public/auth-controller");

router.post("/login", authController.authenticate);
router.get("/welcome", (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = router;
