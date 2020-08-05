const sql = require("./db.js");
const VisitorType = function(visitorType){
    this.name = visitorType.name;
}

VisitorType.create = (visitorType, result) => {
    sql.query("INSERT INTO visitor_type set ?",visitorType,(err,res) => {
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created VisitorType: ", {id: res.visitor_type_id, ...visitorType});
        result(null, {id:res.visitor_type_id, ...visitorType});
    })
}

VisitorType.getAll = result => {
    sql.query("SELECT * FROM visitor_type", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("VisitorTypes: ", res);
      result(null, res);
    });
  };

  module.exports = VisitorType;