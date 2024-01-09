const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  // host is using mysql and a portable localhost
  host: "127.0.0.1",
  // specified port number
  port: 3306,
  //root permission
  user: "root",
  password: "",
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

db.query(`SELECT * FROM employee`, (err, result, fields) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});
// // Test database connection
// app.get("/testDBConnection", (req, res) => {
//   db.query("SELECT 1", (err, result) => {
//     if (err) {
//       console.error("Error connecting to the database:", err);
//       return res
//         .status(500)
//         .json({ message: "Error connecting to the database" });
//     }
//     return res.status(200).json({ message: "Database connection successful" });
//   });
// });

// // Manager feedback
// // Route to handle submission of manager feedback
// app.post("/submitManagerFeedback", (req, res) => {
//   const { feedback, employeeId } = req.body;

//   // Check if required data is provided
//   if (!feedback || !employeeId) {
//     return res
//       .status(400)
//       .json({ message: "Feedback and employee ID are required" });
//   }

//   // Insert the feedback into the database
//   const sql =
//     "INSERT INTO manager_feedback (employee_id, feedback) VALUES (?, ?)";
//   db.query(sql, [employeeId, feedback], (err, result) => {
//     if (err) {
//       console.error("Error submitting manager feedback:", err);
//       return res.status(500).json({ message: "Error submitting feedback" });
//     }
//     return res.status(200).json({ message: "Feedback submitted successfully" });
//   });
// });

app.listen(8081, () => {
  console.log("listening on port 8081...");
});
