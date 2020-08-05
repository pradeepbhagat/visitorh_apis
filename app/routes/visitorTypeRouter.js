var express = require('express');
var router = express.Router();
const visitorType = require("../controllers/visitorTypeController.js");

router.post("/create", visitorType.create);

router.get("/getAll", visitorType.getAll);

module.exports = router;