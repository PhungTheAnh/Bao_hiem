const express = require("express");
const router = express.Router();

const danhmucController = require("../../app/controllers/dich-vu/danhmucController");
//
router.use("/", danhmucController.index);

module.exports = router;
