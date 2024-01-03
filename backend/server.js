const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

app.get('', (req,res) => {
    const sql = "SELECT * FROM ";
    db.query(sql, (err, result) => {
        if (err){
            return res.json(
                {Message: "Error retrieving data from database"}
                );
        }
        return res.json(result);
    })
});

app.listen(8081, () => {
    console.log("listening...");
});