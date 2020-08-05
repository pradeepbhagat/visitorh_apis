const VisitorType = require("../models/visitorTypeModel.js");
/*
payload-
{
    "name":"LPG cyclinder delivery"
}
response-
{
    "name":"LPG cyclinder delivery"
}
*/
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const visitorType = new VisitorType({
    name: req.body.name
  });
  
  VisitorType.create(visitorType, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the VisitorType."
      });
    else res.send(data);
  });
};

/*
response-
[
    {
        "visitor_type_id": 1,
        "name": "guest"
    },
    {
        "visitor_type_id": 2,
        "name": "plumber"
    },
    .
    .
    .
]
*/
exports.getAll = (req, res) => {
  VisitorType.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving VisitorType."
      });
    else res.send(data);
  });
};
