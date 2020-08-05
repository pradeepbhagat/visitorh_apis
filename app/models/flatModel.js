const sql = require("./db.js");
const Flat = function(flat){
    this.flat_number = flat.flat_number;
    this.type = flat.type;
    this.address = flat.address;
    this.building_id = flat.building_id;
    this.isRented = flat.isRented;
}

Flat.create = (flat, result) => {
    sql.query("INSERT INTO flat set ?",flat,(err,res) => {
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created flat: ", {id: res.flat_id, ...flat});
        result(null, {id:res.flat_id, ...flat});
    })
}

Flat.getAll = result => {
    sql.query("SELECT * FROM flat", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("flats: ", res);
      result(null, res);
    });
  };

  Flat.search = (search, result) => {
    var query = `SELECT * FROM flat WHERE flat_number = '${search.flat_number}' and building_id = ${search.building_id}`;
    console.log(query);
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found flat: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };
  module.exports = Flat;