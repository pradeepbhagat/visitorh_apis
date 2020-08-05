const Member = require("../models/memberModel.js");
/*
payload-
{
    "flat_id":1,
    "name":"pradeep"
}

response-
{
    "flat_id":1,
    "name":"pradeep"
}

*/
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const member = new Member({
    name: req.body.name,
    flat_id: req.body.flat_id
  });
  
  Member.create(member, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Member."
      });
    else res.send(data);
  });
};

/*
response-
[
    {
        "member_id": 1,
        "name": "pradeep",
        "flat_id": 1
    },
    {
        "member_id": 2,
        "name": "neha",
        "flat_id": 1
    }
]
*/
exports.getAll = (req, res) => {
    Member.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Member."
      });
    else res.send(data);
  });
};

/*
payload-
{
    "name":"prad"
}

{
    "flat_id":1
}

response-
[
{
    "member_id": 1,
    "name": "pradeep",
    "flat_id": 1
}
]

[
    {
        "member_id": 1,
        "name": "pradeep",
        "flat_id": 1
    },
    {
        "member_id": 2,
        "name": "neha",
        "flat_id": 1
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

  Member.search(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Member."
      });
    else res.send(data);
  });
};
