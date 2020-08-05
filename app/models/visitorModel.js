const sql = require("./db.js");
const Visitor = function(visitor){
    this.name = visitor.name;
    this.address = visitor.address;
    this.visitor_type = visitor.visitor_type;
    this.flat_id = visitor.flat_id;
    this.timestamp = visitor.timestamp;
    this.phonenumber = visitor.phonenumber;
}

Visitor.create = (visitor, result) => {
    sql.query("INSERT INTO visitor set ?",visitor,(err,res) => {
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created visitor: ", {id: res.visitor_id, ...visitor});
        result(null, {id:res.visitor_id, ...visitor});
    })
}

Visitor.getAll = result => {
    sql.query("SELECT * FROM visitor", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("visitors: ", res);
      result(null, res);
    });
  };

  Visitor.search = (search, result) => {
    var query = `SELECT * FROM visitor WHERE`;

    var name = search.name != undefined ? ` name like '%${search.name}%'`: ``;
    var and = search.name != undefined && search.flat_id != undefined ? " AND ": ``;
    var flat =  search.flat_id != undefined ? ` flat_id = ${search.flat_id}`: ``;
    
    query = query+name+and+flat;

    console.log(query);
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found visitor: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };
  module.exports = Visitor;