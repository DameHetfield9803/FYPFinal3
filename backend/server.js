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

//------------------------------------------
//TODO Create employee (DAMIEN)
app.post("/employee", (req, res) => {
  const values = [
    req.body.staffId,
    req.body.name,
    req.body.user,
    req.body.password,
    req.body.email,
  ];
  const sql = "INSERT INTO employee () VALUES (?);";
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
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
// TBC on 15/1/2024
app.post("/employee", (req, res) => {
  const q = "UPDATE employee WHERE ";
});

//TODO Delete employee (DAMIEN)

//---------------------------------------
//TODO Create department (EN QUAN)
app.post("/department", (req, res) => {
  const q = "INSERT INTO department (`department_id`,`name`)VALUES(?)";
  const values = [req.body.department_id, req.body.name];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Department has created successfully ");
  });
});
//TODO Read department (DAMIEN)

//TODO Update department (DAMIEN)

//TODO Delete department (EN QUAN)
app.delete("/department", (req, res) => {
  const q = "DELETE department "; // Continue tomorrow :)
});

//-------------------(split)-----------------------
//TODO Create peer feedback

//TODO Read peer feedback

//TODO Update peer feedback (DAMIEN)

//TODO Delete peer feedback

//---------------------DANIEL-----------------------
//TODO Create self feedback (DAMIEN)
// Route for creating a self evaluation
app.post("/self_evaluations", (req, res) => {
  const { date, feedbackText, staffId } = req.body;

  // Validate inputs here if necessary

  const sql =
    "INSERT INTO self_evaluations (date, feedback_text, staff_id) VALUES (?, ?, ?)";
  const values = [date, feedbackText, staffId];

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
app.get("/self_evaluations", (req, res) => {
  const sql = "SELECT * FROM self_evaluations";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching self evaluations");
    }

    res.status(200).json(results);
  });
});
//TODO Update self feedback (DAMIEN)

app.put("/self_evaluations/:id", (req, res) => {
  const { date, feedbackText, staffId } = req.body;
  const selfEvaluationId = req.params.id;

  // Validate inputs here if necessary

  const sql =
    "UPDATE self_evaluations SET date=?, feedback_text=?, staff_id=? WHERE id=?";
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

app.delete("/self_evaluations/:id", (req, res) => {
  const selfEvaluationId = req.params.id;

  const sql = "DELETE FROM self_evaluations WHERE id=?";
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
//TODO Create manager feedback
app.post("/managerfeedback", (req, res) => {
  const { employeeId, feedback } = req.body; // Creating the feedback


  const q = "INSERT INTO manager_feedback (employee_id, feedback) VALUES (?, ?)";
  db.query(q, [employeeId, feedback], (err, result) => {
    if (err) return res.json(err);
    return res.json({ message: "Manager feedback created successfully", result });
  });
});


//TODO Read manager feedback
app.get("/managerfeedback", (req, res) => {
  const q = "SELECT * FROM manager_feedback";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// TODO Update manager feedback
app.put("/managerfeedback/:id", (req, res) => {
  const feedbackId = req.params.id;
  const { feedback } = req.body; // Updating the feedback

  const q = "UPDATE manager_feedback SET feedback = ? WHERE id = ?";
  db.query(q, [feedback, feedbackId], (err, result) => {
    if (err) return res.json(err);
    if (result.affectedRows === 0) {
      return res.json({ message: "Manager feedback not found" });
    }
    return res.json({ message: "Manager feedback updated successfully", result });
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
    return res.json({ message: "Manager feedback deleted successfully", result });
  });
});

//-----------------------DANIEL-------------------------
//TODO Create accolades

app.post("/accolades", (req, res) => {
  const { staffId, accoladeTitle, completionDate } = req.body;

  // Validate inputs here if necessary

  const sql =
    "INSERT INTO accolades (staff_id, accolade_title, completion_date) VALUES (?, ?, ?)";
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

app.get("/accolades", (req, res) => {
  const sql = "SELECT * FROM accolades";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching accolades");
    }

    res.status(200).json(results);
  });
});

//TODO Update accolades

app.put("/accolades/:id", (req, res) => {
  const { accoladeTitle, completionDate } = req.body;
  const accoladeId = req.params.id;

  // Validate inputs here if necessary

  const sql =
    "UPDATE accolades SET accolade_title=?, completion_date=? WHERE id=?";
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

app.delete("/accolades/:id", (req, res) => {
  const accoladeId = req.params.id;

  const sql = "DELETE FROM accolades WHERE id=?";
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
