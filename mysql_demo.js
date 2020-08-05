var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pradeep@123"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("use visitorh", function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
    con.query("SELECT * FROM society", function (err, result) {
        if (err) throw err;
        console.log("Result: " + JSON.stringify(result));
      });
  });