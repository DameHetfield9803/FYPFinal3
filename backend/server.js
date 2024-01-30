// modules
const express = require("express");
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

// Get staffid En Quan
app.get("/getstaffids", (req, res) => {
  const q = "SELECT staff_id FROM employee";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching staff IDs:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    // Send staff IDs as JSON response within an object
    return res.json({ staffIds: data.map((row) => row.staff_id) });
  });
});

// manager feedback score En Quan
app.get("/managerfeedback/score/:staffId", (req, res) => {
  const staffId = req.params.staffId;

  const sql = "SELECT score FROM manager_feedback WHERE staff_id = ?";
  db.query(sql, [staffId], (err, data) => {
    if (err) {
      console.error("Error fetching manager feedback score:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      return res
        .status(404)
        .json({ error: "Manager feedback not found for the given staff_id" });
    }

    const totalScore = data.reduce((sum, row) => sum + row.score, 0);

    return res.json({ totalScore });
  });
});

// peer feedback score en quan
app.get("/peerfeedback/score/:staffId", (req, res) => {
  const staffId = req.params.staffId;

  const sql = "SELECT score FROM peer_feedback WHERE staff_id = ?";
  db.query(sql, [staffId], (err, data) => {
    if (err) {
      console.error("Error fetching peer feedback score:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      return res
        .status(404)
        .json({ error: "Peer feedback not found for the given staff_id" });
    }

    // Aggregate scores
    const totalScore = data.reduce((sum, row) => sum + row.score, 0);

    return res.json({ totalScore });
  });
});

// self feedback score en quan
app.get("/selffeedback/score/:staffId", (req, res) => {
  const staffId = req.params.staffId;

  const sql = "SELECT score FROM self_feedback WHERE staff_id = ?";
  db.query(sql, [staffId], (err, data) => {
    if (err) {
      console.error("Error fetching self feedback score:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      return res
        .status(404)
        .json({ error: "Self feedback not found for the given staff_id" });
    }
    // Aggregate scores
    const totalScore = data.reduce((sum, row) => sum + row.score, 0);

    return res.json({ totalScore });
  });
});

// Accolade score en quan
app.get("/accolades/score/:staffId", (req, res) => {
  const staffId = req.params.staffId;

  const sql = "SELECT achievement_level FROM accolade WHERE staff_id = ?";
  db.query(sql, [staffId], (err, data) => {
    if (err) {
      console.error("Error fetching accolade score:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      return res
        .status(404)
        .json({ error: "Accolade not found for the given staff_id" });
    }
    // Aggregate scores
    const totalScore = data.reduce(
      (sum, row) => sum + row.achievement_level,
      0
    );

    return res.json({ totalScore });
  });
});
// !!TODO: Attendance score en quan
app.get("/attendance/score/:staffId", (req, res) => {
  const staffId = req.params.staffId;

  const sql = "SELECT score FROM attendance WHERE staff_id = ?";
  db.query(sql, [staffId], (err, data) => {
    if (err) {
      console.error("Error fetching attendance score:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      return res
        .status(404)
        .json({ error: "Attendance not found for the given staff_id" });
    }
    // Aggregate scores
    const totalScore = data.reduce((sum, row) => sum + row.score, 0);

    return res.json({ totalScore });
  });
});

//  to check if staff ID exists (En Quan)
app.get("/checkStaffId/:staffId", (req, res) => {
  const staffId = req.params.staffId;

  // Perform a database query to check if staff ID exists
  db.query(
    "SELECT COUNT(*) AS count FROM employees WHERE staff_id = ?",
    [staffId],
    (err, result) => {
      if (err) {
        console.error("Database Error:", err);
        return res.json({ error: "Error checking staff ID" });
      }

      const staffIdExists = result[0].count > 0;
      return res.json({ exists: staffIdExists });
    }
  );
});

//------------------------------------------
// Create employee (DAMIEN) (done)
app.post("/createemployee", (req, res) => {
  const values = [
    req.body.staff_name,
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.reporting_to,
    req.body.department_id,
    req.body.job_role,
  ];
  const sql =
    "INSERT INTO employee(`staff_name`, `username`, `password`, `email`,`reporting_to`, `department_id`,`job_role`) VALUES (?, ?, ?, ?, ?, ?, ?);";
  db.query(sql, values, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//DONE Read employee (EN QUAN)
app.get("/getemployee", (req, res) => {
  const q = "SELECT DISTINCT * FROM employee";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Update employee (DAMIEN) (done)
app.put("/updateemployee", (req, res) => {
  const vals = [
    req.body.staff_name,
    req.body.username,
    req.body.password,
    req.body.reporting_to,
    req.body.email,
    req.body.department_id,
    req.body.date_joined,
    req.body.job_role,
    req.body.staff_id,
  ];
  const q = `UPDATE employee SET staff_name = ?, username = ?, password = ?,reporting_to = ?,email = ?, department_id = ?,  date_joined = ?, job_role = ? WHERE staff_id = ?;`;
  db.query(q, vals, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/getstaffname", (req, res) => {
  db.query("SELECT staff_name FROM employee;", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Delete employee (DAMIEN) (done)
app.delete("/deleteemployee", (req, res) => {
  const vals = [req.body.staff_id];
  db.query("DELETE FROM `employee` WHERE staff_id = ?;", vals, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//---------------------------------------
//DONE Create department (EN QUAN)
app.post("/department", (req, res) => {
  const vals = [req.body.department_id, req.body.name];
  db.query(
    "INSERT INTO `department`(`department_id`, `name`) VALUES (?,?);",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});
// Read department (DAMIEN) (done)
app.get("/getdepartment", (req, res) => {
  const q = "SELECT DISTINCT department_id FROM department;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Update department (DAMIEN) (DONE)

// set endpoints with requests and response
app.put("/login", (req, res) => {
  // initialize values and queries
  const vals = [req.body.name, req.body.department_id];
  db.query(
    "UPDATE `department` SET `name` = ? WHERE `department_id` = ? ;",
    vals,
    (err, data) => {
      // returns error if there's an error or returns data if there aren't errors
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

app.delete("/department", (req, res) => {
  const val = [req.body.department_id];
  db.query(
    "DELETE FROM `department` WHERE department_id = ?;",
    val,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//DONE Create peer feedback (EN QUAN)
app.post("/createpeerfeedback", (req, res) => {
  const vals = [
    req.body.feedback_text,
    req.body.staff_id,
    req.body.op1,
    req.body.op2,
    req.body.op3,
    req.body.op4,
    req.body.op5,
    req.body.op6,
    req.body.op7,
  ];

  const totalScore =
    parseInt(req.body.op1) +
    parseInt(req.body.op2) +
    parseInt(req.body.op3) +
    parseInt(req.body.op4) +
    parseInt(req.body.op5) +
    parseInt(req.body.op6) +
    parseInt(req.body.op7);

  vals.push(totalScore); // Add totalScore to the values array
  db.query(
    "INSERT INTO `peer_feedback`(`feedback_text`, `staff_id`, `op1`,`op2`,`op3`,`op4`,`op5`,`op6`,`op7`,`score`) VALUES (?,?,?,?,?,?,?,?,?,?);",
    // Feedback the user needs to know who to evaluate.etc
    // staff id change to whoever the user is evaluating, who evaluate who
    // add a new field for evaluator and evaluatee
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//DONE Read peer feedback (DANIEL)
app.get("/peerfeedback", (req, res) => {
  const q = "SELECT * FROM peer_feedback";
  // Create a seperate .get for manager,hr and admin
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Update peer feedback (DAMIEN) (done)

app.put("/peerfeedback/:id", (req, res) => {
  const { id } = req.params;
  const { date, feedback_text, staff_id, op1, op2, op3, op4, op5, op6, op7 } =
    req.body;

  const vals = [
    date,
    feedback_text,
    staff_id,
    op1,
    op2,
    op3,
    op4,
    op5,
    op6,
    op7,
    id, // Include the id in the values array
  ];

  db.query(
    "UPDATE `peer_feedback` SET `date` = (?), `feedback_text` = (?), `staff_id` = (?), `op1` = (?), `op2` = (?), `op3` = (?), `op4` = (?), `op5` = (?), `op6` = (?), `op7` = (?) WHERE `peer_feedback_id` = (?);",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//DONE Delete peer feedback (En Quan)
app.delete("/peerfeedback", (req, res) => {
  const val = [req.body.peer_feedback_id];
  db.query(
    "DELETE FROM `peer_feedback` WHERE peer_feedback_id = ?;",
    val,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//Done Create self feedback (EN QUAN)
app.post("/createselffeedback", (req, res) => {
  const vals = [
    req.body.feedback_text,
    req.body.staff_id,
    req.body.op1,
    req.body.op2,
    req.body.op3,
    req.body.op4,
    req.body.op5,
    req.body.op6,
  ];
  // Calculate the total score
  const totalScore =
    parseInt(req.body.op1) +
    parseInt(req.body.op2) +
    parseInt(req.body.op3) +
    parseInt(req.body.op4) +
    parseInt(req.body.op5) +
    parseInt(req.body.op6);

  vals.push(totalScore); // Add totalScore to the values array
  db.query(
    "INSERT INTO self_feedback (  `feedback_text`, `staff_id`,`op1`,`op2`,`op3`,`op4`,`op5`,`op6`,`score`) VALUES (?,?,?,?,?,?,?,?,?);",
    vals,
    (err, data) => {
      if (err) {
        console.error("Database Error:", err);
        return res.json(err);
      }
      console.log("Insert Result:", data);
      return res.json(data); // returns data if no errors
    }
  );
});

// Read self feedback (DANIEL) (Done)
app.get("/selffeedback", (req, res) => {
  db.query("SELECT * FROM self_feedback;", (err, data) => {
    //Create a seperate endpoint for manager/hr and employee, sort based on roles
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Update self feedback (DAMIEN) (done)

app.put("/selffeedback", (req, res) => {
  const vals = [
    req.body.feedback_text,
    req.body.self_feedback_id,
    req.body.staff_id,
  ]; // retrieving from front end
  db.query(
    "UPDATE self_feedback SET feedback_text = ? WHERE self_feedback_id = ? AND staff_id = ?;",
    //Remove staff id
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});
//DONE Delete self feedback (DANIEL)

app.delete("/selffeedback", (req, res) => {
  // deleting from feedback, requests and response functions
  const val = [req.body.self_feedback_id]; // initializing parameters
  db.query(
    "DELETE FROM `self_feedback` WHERE self_feedback_id = ?;",
    val,
    (err, data) => {
      // querying with value and returns
      if (err) return res.json(err); // return values
      return res.json(data);
    }
  );
});
// DONE Create manager feedback (EN QUAN)
app.post("/createmanagerfeedback", (req, res) => {
  const vals = [
    req.body.feedback_text,
    req.body.staff_id,
    req.body.op1,
    req.body.op2,
    req.body.op3,
    req.body.op4,
    req.body.op5,
    req.body.op6,
    req.body.op7,
    req.body.op8,
    req.body.op9,
    req.body.op10,
    req.body.op11,
    req.body.op12,
  ];

  // Calculate the total score
  const totalScore =
    parseInt(req.body.op1) +
    parseInt(req.body.op2) +
    parseInt(req.body.op3) +
    parseInt(req.body.op4) +
    parseInt(req.body.op5) +
    parseInt(req.body.op6) +
    parseInt(req.body.op7) +
    parseInt(req.body.op8) +
    parseInt(req.body.op9) +
    parseInt(req.body.op10) +
    parseInt(req.body.op11) +
    parseInt(req.body.op12);

  vals.push(totalScore); // Add totalScore to the values array
  db.query(
    "INSERT INTO `manager_feedback`(`feedback_text`, `staff_id`, `op1`,`op2`,`op3`,`op4`,`op5`,`op6`,`op7`,`op8`,`op9`,`op10`,`op11`,`op12`,`score`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//DONE Update manager feedback (FIRDAUS)
app.put("/managerfeedback", (req, res) => {
  const { manager_feedback_id, feedback_text } = req.body;

  const q =
    "UPDATE manager_feedback SET feedback_text = ? WHERE manager_feedback_id = ?";
  db.query(q, [feedback_text, manager_feedback_id], (err, result) => {
    console.log("SQL Query:", q);
    console.log("SQL Result:", result);

    if (err) return res.json(err);
    if (result.affectedRows > 0) {
      return res.json({
        message: "Manager feedback updated successfully",
        result,
      });
    } else {
      return res.status(404).json({ message: "Manager feedback not found" });
    }
  });
});

// UPDATED Update manager feedback (FIRDAUS) for manager feedbacklist
app.put("/managerfeedback/:id", (req, res) => {
  const { id } = req.params;
  const {
    feedback_text,
    op1,
    op2,
    op3,
    op4,
    op5,
    op6,
    op7,
    op8,
    op9,
    op10,
    op11,
    op12,
  } = req.body;

  const q = `
    UPDATE manager_feedback 
    SET feedback_text = ?, 
        op1 = ?, 
        op2 = ?, 
        op3 = ?, 
        op4 = ?, 
        op5 = ?, 
        op6 = ?, 
        op7 = ?, 
        op8 = ?, 
        op9 = ?, 
        op10 = ?, 
        op11 = ?, 
        op12 = ? 
    WHERE manager_feedback_id = ?`;

  const values = [
    feedback_text,
    op1,
    op2,
    op3,
    op4,
    op5,
    op6,
    op7,
    op8,
    op9,
    op10,
    op11,
    op12,
    id,
  ];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error("Error updating manager feedback:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.affectedRows > 0) {
      return res.json({
        message: "Manager feedback updated successfully",
        result,
      });
    } else {
      return res.status(404).json({ message: "Manager feedback not found" });
    }
  });
});

//DONE Read manager feedback (EN QUAN)
app.get("/managerfeedback", (req, res) => {
  const q = "SELECT * FROM manager_feedback";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//DONE Delete manager feedback (FIRDAUS)
app.delete("/deletemanagerfeedback", (req, res) => {
  //initalizing endpoint, request, and response
  const val = [req.body.manager_feedback_id]; // retrieving  manager_feedback_id from database
  db.query(
    "DELETE FROM manager_feedback WHERE manager_feedback_id = ?",
    val,
    (err, data) => {
      // query and returns
      if (err) return res.json(err); // return values
      return res.json(data);
    }
  );
});

// UPDATED Delete manager feedback (FIRDAUS) TESTING VIEWFEEDBACKLIST
app.delete("/managerfeedback/:id", (req, res) => {
  const feedbackId = req.params.id; // Retrieve feedback ID from URL parameters

  db.query(
    "DELETE FROM manager_feedback WHERE manager_feedback_id = ?",
    [feedbackId],
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//-----------------------DANIEL-------------------------
//Done Create accolades (DANIEL)
app.post("/addaccolade", (req, res) => {
  const val = [
    req.body.accolade_title,
    req.body.completion_date,
    req.body.achievement_level,
    req.body.staff_id,
  ];
  db.query(
    "INSERT INTO `accolade`(accolade_title, completion_date,achievement_level,staff_id) VALUES(?,?,?,?);",
    val,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//Done Read accolades (DANIEL)

app.get("/getaccolade", (req, res) => {
  db.query("SELECT * FROM accolade;", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//DONE Update accolades (DANIEL)

app.put("/updateaccolade/:id", (req, res) => {
  const { accolade_title, completion_date, achievement_level, staff_id } =
    req.body;
  const accolade_id = req.params.id;

  db.query(
    "UPDATE `accolade` SET accolade_title = ?, completion_date = ?, achievement_level = ?, staff_id = ? WHERE accolade_id = ?",
    [accolade_title, completion_date, achievement_level, staff_id, accolade_id],
    (err, data) => {
      if (err) {
        console.error("Error updating accolade:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json({ message: "Accolade updated successfully" });
    }
  );
});

//Done Delete accolades (DANIEL)
app.delete("/deleteaccolade", (req, res) => {
  const accoladeId = req.body.accolade_id;

  if (!accoladeId) {
    return res.status(400).json({ error: "Accolade ID is required" });
  }

  const val = [accoladeId];
  db.query(
    "DELETE FROM `accolade` WHERE accolade_id = ?",
    val,
    (err, result) => {
      if (err) {
        console.error("Error deleting accolade:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Accolade not found" });
      }

      return res.json({ message: "Accolade deleted successfully" });
    }
  );
});

// CRUD employee.job_role

app.get("/getjobroles", (req, res) => {
  db.query("SELECT DISTINCT job_role FROM employee;", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/updateempjobrole", (req, res) => {
  const vals = [req.body.job_role, req.body.staff_id];
  db.query(
    "UPDATE employee SET job_role=? WHERE staff_id=?;",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

app.get(`/getempjobrole/:id`, (req, res) => {
  const val = [req.params.id];
  db.query(
    "SELECT job_role FROM employee WHERE staff_id = ?;",
    val,
    (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0) {
        return res.status(404).json({ error: "Job role not found" });
      }
      const jobRole = data[0].job_role; // Assuming the job role is in the first element of the array
      return res.json({ job_role: jobRole });
    }
  );
}); // Done Firdaus

app.put("/updateempreportingto", (req, res) => {
  const vals = [req.body.reporting_to, req.body.staff_id];
  db.query(
    "UPDATE employee SET reporting_to =? WHERE staff_id=?;",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

app.put(`/updateempjobrole`, (req, res) => {
  const vals = [req.body.job_role, req.body.staff_id];
  db.query(
    "UPDATE employee SET job_role = ? WHERE staff_id = ?;",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
}); // DONE by Daniel

// validating employee credentials
app.post("/login", (req, res) => {
  const vals = [req.body.email, req.body.password];
  db.query(
    "SELECT staff_id, email, password FROM employee WHERE email = ? AND password =?;",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0) {
        return res.status(401).json({ error: "Invalid email or password." });
      }
      const users = data.map((user) => ({
        staff_id: user.staff_id,
        email: user.email,
        password: user.password,
      }));
      return res.json(users); // Returning an array of users
    }
  );
});

app.get("/getjobrolebystaffname", (req,res) => {
  const vals =[req.body.staff_name];
  db.query("SELECT job_role FROM employee WHERE staff_name = ?;", vals, (err,data) => {
    if(err) return res.json(err);
    return res.json(data);
  });
});

app.put("/updatejobrolebystaffname", (req,res) => {
  const vals = [req.body.job_role, req.body.staff_name]
  db.query("UPDATE employee set job_role = ? WHERE staff_name =?;", vals, (err,data) =>{
    if(err) return res.json(err)
    return res.json(data)
  })
});

// update employee email
app.put("/updateuseremail", (req, res) => {
  const vals = [req.body.email, req.body.staff_id];
  db.query(
    "UPDATE employee SET email = ? WHERE staff_id=?;",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//---------------------------END OF CRUD---------------------------

app.listen(3001, () => {
  // set port, listen for requests
  console.log("listening on port 3001...");
});

// Done by Damien, Firdaus, En Quan, and Daniel
