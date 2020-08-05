var express = require('express');
var router = express.Router();
const building = require("../controllers/buildingController.js");

router.post("/create", building.create);


router.get("/getAll", building.getAll);


router.post("/search", building.search);

module.exports = router;