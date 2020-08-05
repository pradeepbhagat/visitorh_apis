const sql = require("./db.js");
const FlatType = function(flatType){
    this.name = flatType.name;
}

FlatType.create = (flatType, result) => {
    sql.query("INSERT INTO flat_type set ?",flatType,(err,res) => {
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created flatType: ", {id: res.flat_type_id, ...flatType});
        result(null, {id:res.flat_type_id, ...flatType});
    })
}

FlatType.getAll = result => {
    sql.query("SELECT * FROM flat_type", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("flatTypes: ", res);
      result(null, res);
    });
  };

  module.exports = FlatType;