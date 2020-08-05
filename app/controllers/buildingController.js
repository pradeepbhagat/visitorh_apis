const Building = require("../models/buildingModel.js");
/*
payload-
{
    "name":"F",
    "address":"building F, Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045",
    "society":1
}

response-
{
    "name": "E",
    "address": "building F, Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045",
    "society": 1
}

*/
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const building = new Building({
    name: req.body.name,
    address: req.body.address,
    society: req.body.society,
  });
  
  Building.create(building, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Building."
      });
    else res.send(data);
  });
};

/*
response-
[
    {
        "building_id": 1,
        "name": "F",
        "address": "building F, Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045",
        "society": 1
    }
  ]
*/
exports.getAll = (req, res) => {
    Building.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Building."
      });
    else res.send(data);
  });
};

/*
payload-
{
    "building_name":"F",
    "society_name": "SkyBay"
}

response-
{
    "building_id": 1,
    "name": "F",
    "address": "building F, Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045",
    "society": 1
}
*/
exports.search = (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Building.search(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Building."
      });
    else res.send(data);
  });
};
