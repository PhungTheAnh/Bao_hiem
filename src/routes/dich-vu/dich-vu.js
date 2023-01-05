const express = require("express");
const router = express.Router();

const dichvuController = require("../../app/controllers/dich-vu/dichvuController");
//
router.use("/", dichvuController.index);

module.exports = router;
