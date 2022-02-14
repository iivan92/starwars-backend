const express = require("express");
const router = express.Router();
const peopleController = require("../../controllers/private/people-controller");

router.get("/", peopleController.getAll);

module.exports = router;
