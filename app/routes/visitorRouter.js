var express = require('express');
var router = express.Router();
const visitor = require("../controllers/visitorController.js");

router.post("/create", visitor.create);


router.get("/getAll", visitor.getAll);


router.post("/search", visitor.search);

module.exports = router;