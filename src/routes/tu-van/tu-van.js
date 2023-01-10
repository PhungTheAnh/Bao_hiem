const express = require("express");
const router = express.Router();

const tuvanController = require("../../app/controllers/tu-van/tuvanController");
//
router.use("/", tuvanController.index);

module.exports = router;
