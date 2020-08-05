var express = require('express');
var router = express.Router();
const flat = require("../controllers/flatController.js");

router.post("/create", flat.create);


router.get("/getAll", flat.getAll);


router.post("/search", flat.search);

module.exports = router;