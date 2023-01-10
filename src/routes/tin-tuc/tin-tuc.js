const express = require("express");
const router = express.Router();

const tintucController = require("../../app/controllers/tin-tuc/tintucController");
//
router.use("/", tintucController.index);

module.exports = router;
