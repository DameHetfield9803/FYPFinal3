const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL successfully Connected...');
}));

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

app.get("/departments", function(re, res){
  // querying from mydb.department
  db.query("SELECT * FROM department;", (error, results) => {
    // throws an error if there are errors connecting to either the database or the API
    if (error) {
      // Handle database errors appropriately
      return res.status(500).json({ error: error.message });
    }
    // returns data as Stringified JSON if no errors are thrown
    res.json({ departments: JSON.parse(JSON.stringify(results)) });
  });
});

// Get employee records
// db.query(`SELECT * FROM employee`, (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });

app.get(`/`, (req, res) => {
  res.json({ message: "Hello World" });
});

async function submitPeerFeedback(date, desc,peerId, formId, staff_id){
  const res = await db.query(`INSERT INTO EMPLOYEE (date, feedback_text, peer_feedback_id, peer_id, staff_id), ${date}, ${desc}, ${peerId}, ${formId}, ${staff_id}`);
  // res is saying that its inserting into employees using those fields, this is all JQuery.
  let msg = "Error in inserting data into database. \n";
  if (res.affectedRows) {
    msg = `Successfully added.\n`;
  }
  return {msg};

  app.post()
}

async function getPeerFeedback()
{
  const res = await db.query(`SELECT * FROM peerfeedback;`);
  if(res.affectedRows >=1){
    return console.log("Successfully retrieved from database. \n");
  }
  else{
    return err;
  }
}

app.post('/submitpeerfeedback', async function(req,res,next){
  try{
    res.json();
  }
  catch (err){
    console.error("There may be something wrong with the database or API. \n");
    next(err);
  }
})

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

app.listen(3001, () => {
  console.log("listening on port 3001...");
});
