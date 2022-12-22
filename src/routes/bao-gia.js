const express = require("express");
const router = express.Router();

const BaogiaController = require("../app/controllers/BaogiaController");
//
router.use("/", BaogiaController.index);

module.exports = router;
