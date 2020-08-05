const Society = require("../models/societyModel.js");


/*
Payload-
{
  "name":"Equilife Homes",
  "address":"5/3, Shitaladevi Nagar, National Games Park, Mahalunge, Pune, Maharashtra 411045"
}

Response-
{
    "name": "Equilife Homes",
    "address": "5/3, Shitaladevi Nagar, National Games Park, Mahalunge, Pune, Maharashtra 411045"
}
*/

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const society = new Society({
    name: req.body.name,
    address: req.body.address
  });
  
  Society.create(society, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Society."
      });
    else res.send(data);
  });
};

/*
Response-
[
    {
        "society_id": 1,
        "name": "SkyBay",
        "address": "Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045"
    }
]
*/
exports.getAll = (req, res) => {
  Society.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Society."
      });
    else res.send(data);
  });
};

/*
Payload-
{
    "searchTerm":"sky"
}

Response-
{
    "society_id": 1,
    "name": "SkyBay",
    "address": "Saarthi SkyBay, sv/no-60/1, Mahalunge, Pune, 4110045"
}
*/
exports.search = (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Society.search(req.body.searchTerm, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Society."
      });
    else res.send(data);
  });
};
