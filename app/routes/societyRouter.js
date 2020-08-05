var express = require('express');
var router = express.Router();
const society = require("../controllers/societyController.js");

router.post("/create", society.create);


router.get("/getAll", society.getAll);


router.post("/search", society.search);

module.exports = router;