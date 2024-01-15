// modules
const express = require("express"); // import express
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

// axios is in front end, client, not back end.

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

//------------------------------------------
//TODO Create employee (DAMIEN)
app.post("/employee", (req, res) => {
  const values = [
    req.body.staffId,
    req.body.name,
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.department_id,
    req.body.report_to,
    req.body.date_joined,
    req.body.employee_role,
  ];
  const sql =
    "INSERT INTO employee(`staff_id`, `staff_name`, `username`, `password`, `email`, `department_id`, `report_to`, `date_joined`, `employee_role`) VALUES ?, ?, ?, ?, ?, ?, ?, ?, ?;";
  db.query(sql, values, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//TODO Read employee (EN QUAN)
app.get("/employee", (req, res) => {
  const q = "SELECT * FROM employee";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//TODO Update employee (DAMIEN)
app.post("/employee", (req, res) => {
  const q = `UPDATE `;
});

//TODO Delete employee (DAMIEN)

//---------------------------------------
//TODO Create department (EN QUAN)
app.post("/department", (req, res) => {
  const q = "INSERT INTO department (`department_id`,`name`)VALUES(?)";
  const values = [req.body.department_id, req.body.name];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Department has created successfully;");
  });
});
//TODO Read department (DAMIEN)
app.get("/department", (req, res) => {
  const q = "SELECT * FROM department;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//TODO Update department (DAMIEN)

app.post("/department", (req, res) => {
  const q = "UPDATE department_id, name, VALUES (?, ?, ?);";
});

//TODO Delete department (EN QUAN)
app.delete("/department", (req, res) => {
  const q = "DELETE department "; // Continue tomorrow :)
});

//-------------------(split)-----------------------
//TODO Create peer feedback

//TODO Read peer feedback (DANIEL)
app.get("/peerfeedback", (req, res) => {
  const q = "SELECT * FROM peerfeedback";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//TODO Update peer feedback (DAMIEN)

app.post("/peerfeedback", (req, res) => {
  const q = "UPDATE peerfeedback ";
});

//I AM GONNA FUCKING KILL MYSELF

//TODO Delete peer feedback

//---------------------DANIEL-----------------------
//TODO Create self feedback (DAMIEN)
// Route for creating a self evaluation
app.post("/selffeedback", (req, res) => {
  const { self_feedback_id, date, feedbackText, staffId } = req.body;
  const sql =
    "INSERT INTO selffeedback (self_feedback_id ,date, feedback_text, staff_id) VALUES (?, ?, ?,?)";
  const values = [self_feedback_id, date, feedbackText, staffId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error creating self evaluation");
    }

    console.log("Self evaluation created:", result);
    res.status(201).send("Self evaluation created successfully");
  });
});
//TODO Read self feedback (DANIEL)
app.get("/selffeedback", (req, res) => {
  const q = "SELECT * FROM selffeedback";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//TODO Update self feedback (DAMIEN)

app.put("/selffeedback/:id", (req, res) => {
  const { date, feedbackText, staffId } = req.body;
  const selfEvaluationId = req.params.id;

  // Validate inputs here if necessary

  const sql =
    "UPDATE selffeedback SET date=?, feedback_text=?, staff_id=? WHERE id=?";
  const values = [date, feedbackText, staffId, selfEvaluationId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error updating self evaluation");
    }

    console.log("Self evaluation updated:", result);
    res.status(200).send("Self evaluation updated successfully");
  });
});
//TODO Delete self feedback (EN QUAN)

app.delete("/selffeedback/:id", (req, res) => {
  const selfEvaluationId = req.params.id;

  const sql = "DELETE FROM selffeedback WHERE id=?";
  const values = [selfEvaluationId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error deleting self evaluation");
    }

    console.log("Self evaluation deleted:", result);
    res.status(200).send("Self evaluation deleted successfully");
  });
});
//----------------------FIRDAUS----------------------
// Create manager feedback
app.post("/managerfeedback", (req, res) => {
  const { managerFb, date, feedbackText, staffId } = req.body; // Creating the feedback

  const q =
    "INSERT INTO manager_feedback (manager_feedback_id, date, feedback_text, staff_id) VALUES (?, ?, ?, ?)";

  db.query(q, [managerFb, date, feedbackText, staffId], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

// TODO Delete manager feedback
app.delete("/managerfeedback/:id", (req, res) => {
  const feedbackId = req.params.id; // Deleting the feedback, need to check this again

  const q = "DELETE FROM manager_feedback WHERE id = ?";
  db.query(q, [feedbackId], (err, result) => {
    if (err) return res.json(err);
    if (result.affectedRows === 0) {
      return res.json({ message: "Manager feedback not found" });
    }
    return res.json({
      message: "Manager feedback deleted successfully",
      result,
    });
  });
}); //TODO Create manager feedback
app.post("/managerfeedback", (req, res) => {
  const { staff_id, feedback_text } = req.body; // Creating the feedback

  const q = "INSERT INTO manager_feedback (staff_id, feedback) VALUES (?, ?)";
  db.query(q, [staff_id, feedback_text], (err, result) => {
    if (err) return res.json(err);
    return res.json({
      message: "Manager feedback created successfully",
      result,
    });
  });
});

//TODO Read manager feedback
app.get("/managerfeedback", (req, res) => {
  const q = "SELECT * FROM managerfeedback";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Update manager feedback
app.put("/managerfeedback/:id", (req, res) => {
  const manager_feedback_id = req.params.id;
  const { feedback_text } = req.body; // Updating the feedback

  const q = "UPDATE manager_feedback SET feedback = ? WHERE id = ?";
  db.query(q, [feedback_text, manager_feedback_id], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

// Delete manager feedback
app.delete("/managerfeedback/:id", (req, res) => {
  const managerFeedbackId = req.params.id;

  const q = "DELETE FROM managerfeedback WHERE manager_feedback_id=?";
  db.query(q, [managerFeedbackId], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//-----------------------DANIEL-------------------------
//TODO Create accolades

app.post("/accolate", (req, res) => {
  const { staffId, accoladeTitle, completionDate } = req.body;

  // Validate inputs here if necessary

  const sql =
    "INSERT INTO accolate (staff_id, accolade_title, completion_date) VALUES (?, ?, ?)";
  const values = [staffId, accoladeTitle, completionDate];

  //this one is error handling idk correct or not
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error creating accolade");
    }

    console.log("Accolade created:", result);
    res.status(201).send("Accolade created successfully");
  });
});

//TODO Read accolades

app.get("/accolate", (req, res) => {
  db.query("SELECT * FROM accolate;", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//TODO Update accolades

app.put("/accolate/:id", (req, res) => {
  const { accoladeTitle, completionDate } = req.body;
  const accoladeId = req.params.id;

  // Validate inputs here if necessary

  const sql =
    "UPDATE accolate SET accolade_title=?, completion_date=? WHERE id=?";
  const values = [accoladeTitle, completionDate, accoladeId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error updating accolade");
    }

    console.log("Accolade updated:", result);
    res.status(200).send("Accolade updated successfully");
  });
});

//TODO Delete accolades

app.delete("/accolate/:id", (req, res) => {
  const accoladeId = req.params.id;

  const sql = "DELETE FROM accolate WHERE id=?";
  const values = [accoladeId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error deleting accolade");
    }

    console.log("Accolade deleted:", result);
    res.status(200).send("Accolade deleted successfully");
  });
});

//---------------------------END OF CRUD---------------------------

app.listen(3001, () => {
  // set port, listen for requests
  console.log("listening on port 3001...");
});

// Done by Damien, Firdaus, En Quan, and Daniel
