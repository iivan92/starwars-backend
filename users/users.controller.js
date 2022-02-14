const express = require("express");
const router = express.Router();
const userService = require("./users.service");

// routes
router.post("/login", authenticate);
router.get("/welcome", (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = router;

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.status(200).json(user)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch((err) => next(err));
}
