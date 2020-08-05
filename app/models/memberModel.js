const sql = require("./db.js");
const Member = function(member){
    this.name = member.name;
    this.flat_id = member.flat_id;
}

Member.create = (member, result) => {
    sql.query("INSERT INTO member set ?",member,(err,res) => {
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("created member: ", {id: res.member_id, ...member});
        result(null, {id:res.member_id, ...member});
    })
}

Member.getAll = result => {
    sql.query("SELECT * FROM member", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("members: ", res);
      result(null, res);
    });
  };

  Member.search = (search, result) => {
    var query = `SELECT * FROM member WHERE`;

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
        console.log("found member: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };
  module.exports = Member;