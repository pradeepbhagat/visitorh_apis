const Visitor = require("../models/visitorModel.js");
/*
payload-
{
    "flat_id":1,
    "name":"megha",
    "address":"bavdhan",
    "visitor_type":1,
    "timestamp":1596567889,
    "phonenumber":900441234
}
response-
{
    "flat_id":1,
    "name":"megha",
    "address":"bavdhan",
    "visitor_type":1,
    "timestamp":1596567889,
    "phonenumber":900441234
}
*/
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const visitor = new Visitor({
    name : req.body.name,
    address : req.body.address,
    visitor_type : req.body.visitor_type,
    flat_id : req.body.flat_id,
    timestamp : req.body.timestamp,
    phonenumber :req.body.phonenumber
  });
  
  Visitor.create(visitor, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Visitor."
      });
    else res.send(data);
  });
};

/*
response-
[
    {
        "visitor_id": 1,
        "name": "megha",
        "visitor_type": 1,
        "address": "bavdhan",
        "flat_id": 1,
        "timestamp": 1596567889,
        "phonenumber": 900441234
    }
]
*/
exports.getAll = (req, res) => {
    Visitor.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Visitor."
      });
    else res.send(data);
  });
};

/*
payload-
{
    "flat_id":1
}

{
    "name":"meg"
}
response-
[
    {
        "visitor_id": 1,
        "name": "megha",
        "visitor_type": 1,
        "address": "bavdhan",
        "flat_id": 1,
        "timestamp": 1596567889,
        "phonenumber": 900441234
    }
]

[
    {
        "visitor_id": 1,
        "name": "megha",
        "visitor_type": 1,
        "address": "bavdhan",
        "flat_id": 1,
        "timestamp": 1596567889,
        "phonenumber": 900441234
    }
]
*/
exports.search = (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Visitor.search(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Visitor."
      });
    else res.send(data);
  });
};
