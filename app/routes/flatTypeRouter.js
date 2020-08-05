var express = require('express');
var router = express.Router();
const flatType = require("../controllers/flatTypeController.js");

router.post("/create", flatType.create);

router.get("/getAll", flatType.getAll);

module.exports = router;