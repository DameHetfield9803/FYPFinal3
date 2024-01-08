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

// Check for database connection errors
db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/yourTableName', (req, res) => {
    const tableName = "yourTableName"; // Replace with your actual table name
    const sql = `SELECT * FROM ${tableName}`;
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error retrieving data from database:', err);
            return res.json({ Message: "Error retrieving data from database" });
        }
        return res.json(result);
    });
});

app.listen(8081, () => {
    console.log("listening on port 8081...");
});
