const express = require("express");
const router = express.Router();

const danhmucDetailController = require("../../app/controllers/dich-vu/danhmucDetailController");
//
router.use("/", danhmucDetailController.index);

module.exports = router;
