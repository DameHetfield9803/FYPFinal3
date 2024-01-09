const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  // host is using mysql and a portable localhost
  host: "127.0.0.1",
  // specified port number
  port: 3306,
  //root permission
  user: "root",
  password: "root",
  // using database named mydb... all our fyp data comes from there
  database: "mydb",
});

// example of getting something from somewhere taking parameters request and response
/*app.get('', (req,res) => {
    const sql = "SELECT * FROM ";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error retrieving data from database:', err);
            return res.json({ Message: "Error retrieving data from database" });
        }
        return res.json(result);
    });
});*/

app.get("/", (re, res) => {
  return res.json("From Server.js...");
});

app.listen(8081, () => {
  console.log("listening on port 8081...");
});
