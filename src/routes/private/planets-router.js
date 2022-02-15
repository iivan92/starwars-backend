const express = require("express");
const router = express.Router();
const planetsController = require("../../controllers/private/planets-controller");

router.get("/", planetsController.getAll);

module.exports = router;
