const express = require("express");
const router = express.Router();

const BaogiaController = require("../../app/controllers/bao-gia/baoGiaController");
//
router.use("/", BaogiaController.index);

module.exports = router;
