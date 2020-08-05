const FlatType = require("../models/flatTypeModel.js");
/*
payload-
{
    "name":"2.5 bhk"
}
response-
{
    "name":"2.5 bhk"
}
*/
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const flatType = new FlatType({
    name: req.body.name
  });
  
  FlatType.create(flatType, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the FlatType."
      });
    else res.send(data);
  });
};

/*
response-
*/
exports.getAll = (req, res) => {
  FlatType.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving FlatType."
      });
    else res.send(data);
  });
};
