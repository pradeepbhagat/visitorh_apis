const sql = require("./db.js");
const Building = function(building){
    this.name = building.name;
    this.address = building.address;
    this.society = building.society;
}

Building.create = (building, result) => {
    sql.query("INSERT INTO building set ?",building,(err,res) => {
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created building: ", {id: res.building_id, ...building});
        result(null, {id:res.building_id, ...building});
    })
}

Building.getAll = result => {
    sql.query("SELECT * FROM building", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("buildings: ", res);
      result(null, res);
    });
  };

  Building.search = (search, result) => {
    var buildingIdQuery = `SELECT * FROM building WHERE name like '%${search.building_name}%'`;
    var buildingIdAndSocietyNameQuery = ` AND building_id = (select society_id from society where name = '${search.society_name}')`;
    var query = search.society_name == undefined ? buildingIdQuery : buildingIdQuery.concat(buildingIdAndSocietyNameQuery);
    console.log(query);
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found building: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };
  module.exports = Building;