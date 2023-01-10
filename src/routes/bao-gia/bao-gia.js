const express = require("express");
const router = express.Router();

const BaogiaController = require("../../app/controllers/bao-gia/baogiaController");
//
router.use("/", BaogiaController.index);

module.exports = router;
