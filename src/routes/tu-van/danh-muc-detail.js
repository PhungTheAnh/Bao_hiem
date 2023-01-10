const express = require("express");
const router = express.Router();

const danhmucDetailController = require("../../app/controllers/tu-van/danhmucDetailController");
//
router.use("/", danhmucDetailController.index);

module.exports = router;
