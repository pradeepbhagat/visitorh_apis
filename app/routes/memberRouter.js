var express = require('express');
var router = express.Router();
const member = require("../controllers/memberController.js");

router.post("/create", member.create);


router.get("/getAll", member.getAll);


router.post("/search", member.search);

module.exports = router;