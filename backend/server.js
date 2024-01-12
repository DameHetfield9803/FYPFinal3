// modules
const express = require("express"); // import express
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cors());
app.use(express.json()); // parse requests of content-type - application/json

const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "mydb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL successfully Connected...");
});

// app.get("/departments", function (re, res) {
//   // querying from mydb.department
//   db.query("SELECT * FROM department;", (error, results) => {
//     // throws an error if there are errors connecting to either the database or the API
//     if (error) {
//       // Handle database errors appropriately
//       return res.status(500).json({ error: error.message });
//     }
//     // returns data as Stringified JSON if no errors are thrown
//     return res.json({ departments: JSON.parse(JSON.stringify(results)) });
//   });
// });

// async function getEmployee() {
//   const res = await db.query(`SELECT * FROM employee;`);
//   if (res.affectedRows >= 1) {
//     return console.log("Successfully retrieved from database. \n");
//   } else {
//     return err;
//   }
// }

// app.get(`/`, (req, res) => {
//   res.json({ message: "Hello World" });
// });

// async function submitPeerFeedback(date, desc, peerId, formId, staff_id) {
//   const res = await db.query(
//     `INSERT INTO EMPLOYEE (date, feedback_text, peer_feedback_id, peer_id, staff_id), ${date}, ${desc}, ${peerId}, ${formId}, ${staff_id}`
//   );
//   // res is saying that its inserting into employees using those fields, this is all JQuery.
//   let msg = "Error in inserting data into database. \n";
//   if (res.affectedRows) {
//     msg = `Successfully added.\n`;
//   }
//   return { msg };

//   app.post();
// }

// async function getPeerFeedback() {
//   const res = await db.query(`SELECT * FROM peerfeedback;`);
//   if (res.affectedRows >= 1) {
//     return console.log("Successfully retrieved from database. \n");
//   } else {
//     return err;
//   }
// }

// app.post("/submitpeerfeedback", async function (req, res, next) {
//   try {
//     res.json();
//   } catch (err) {
//     console.error("There may be something wrong with the database or API. \n");
//     next(err);
//   }
// });

// Manager feedback
// Route to handle submission of manager feedback
app.post("/submitmanagerfeedback", (req, res) => {
  console.log("Feedback received : ", req.body); // Check if the request body is properly parsed
  const { feedback, employeeId } = req.body;

  // Check if required data is provided
  // if (!feedback || !employeeId) {
  //   return res
  //     .status(400)
  //     .json({ message: "Feedback and employee ID are required" });
  // }

  // Insert the feedback into the database
  const sql =
    "INSERT INTO manager_feedback (employee_id, feedback) VALUES (?, ?)";
  db.query(sql, [employeeId, feedback], (err, result) => {
    if (err) {
      console.error("Error submitting manager feedback:", err);
      return res.status(500).json({ message: "Error submitting feedback" });
    }
    return res.status(200).json({ message: "Feedback submitted successfully" });
  });
});

// set port, listen for requests
app.listen(3001, () => {
  console.log("listening on port 3001...");
});

// Done by Damien, Firdaus, En Quan, and Daniel.
