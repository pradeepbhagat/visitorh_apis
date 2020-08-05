const sql = require("./db.js");
const Society = function(society){
    this.name = society.name;
    this.address = society.address;
}

Society.create = (society, result) => {
    sql.query("INSERT INTO society set ?",society,(err,res) => {
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created society: ", {id: res.society_id, ...society});
        result(null, {id:res.society_id, ...society});
    })
}

Society.findById = (societyId, result) => {
    sql.query(`SELECT * FROM society WHERE id = ${societyId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found society: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };

  Society.findByName = (societyId, result) => {
    sql.query(`SELECT * FROM society WHERE name like % ${societyId} %`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found society: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };

  Society.getAll = result => {
    sql.query("SELECT * FROM society", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("societies: ", res);
      result(null, res);
    });
  };

  Society.updateById = (id, society, result) => {
    sql.query(
      "UPDATE society SET name = ?, address = ? WHERE id = ?",
      [society.name, society.address, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated society: ", { id: id, ...society });
        result(null, { id: id, ...society });
      }
    );
  };
  Society.search = (search, result) => {
    sql.query(`SELECT * FROM society WHERE name like '%${search}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found society: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };
  module.exports = Society;