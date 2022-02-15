const express = require("express");
const router = express.Router();
const starshipsController = require("../../controllers/private/starships-controller");

router.get("/", starshipsController.getAll);

module.exports = router;
