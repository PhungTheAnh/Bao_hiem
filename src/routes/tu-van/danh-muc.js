const express = require("express");
const router = express.Router();

const danhmucController = require("../../app/controllers/tu-van/danhmucController");
//
router.use("/", danhmucController.index);

module.exports = router;
