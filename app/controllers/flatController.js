const Flat = require("../models/flatModel.js");
/*
payload-
{
    "flat_number":"504",
    "type":"2",
    "address":"504,building F, Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045",
    "building_id":1,
    "isRented":0
}
response-
{
    "flat_number":"504",
    "type":"2",
    "address":"504,building F, Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045",
    "building_id":1,
    "isRented":0
}
*/
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const flat = new Flat({
    flat_number: req.body.flat_number,
    type: req.body.type,
    address: req.body.address,
    building_id: req.body.building_id,
    isRented: req.body.isRented
  });
  
  Flat.create(flat, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Flat."
      });
    else res.send(data);
  });
};

/*
response-
[
    {
        "flat_id": 1,
        "flat_number": "504",
        "type": 2,
        "address": "504,building F, Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045",
        "building_id": 1,
        "isRented": 0
    }
]
*/
exports.getAll = (req, res) => {
    Flat.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Flat."
      });
    else res.send(data);
  });
};

/*
payload-
{
    "flat_number":"504",
    "building_id": 1
}

response-
{
    "flat_id": 1,
    "flat_number": "504",
    "type": 2,
    "address": "504,building F, Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045",
    "building_id": 1,
    "isRented": 0
}
*/
exports.search = (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Flat.search(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Flat."
      });
    else res.send(data);
  });
};
