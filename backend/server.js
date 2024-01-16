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
    req.body.staff_id,
    req.body.staff_name,
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.department_id,
    req.body.report_to,
    req.body.date_joined,
    req.body.employee_role,
  ];
  const sql =
    "INSERT INTO employee(`staff_id`, `staff_name`, `username`, `password`, `email`, `department_id`, `report_to`, `date_joined`, `employee_role`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
  db.query(sql, values, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//DONE Read employee (EN QUAN)
app.get("/employee", (req, res) => {
  const q = "SELECT * FROM employee";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//TODO Update employee (DAMIEN)
app.post("/employee", (req, res) => {
  const values = [req.body.staff_id];
  const q = `UPDATE `;
});

//TODO Delete employee (DAMIEN)

//---------------------------------------
//DONE Create department (EN QUAN)
app.post("/department", (req, res) => {
  const { departmentId, departmentName } = req.body;
  const q = "INSERT INTO department (`department_id`,`name`)VALUES(?,?)";
  db.query(q, [departmentId, departmentName], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
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

//DONE Delete department (EN QUAN)
app.delete("/department", (req, res) => {
  const { department_id } = req.body;

  const q = "DELETE FROM department WHERE department_id = ?";
  db.query(q, [department_id], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error deleting department" });
    } else {
      if (data.affectedRows > 0) {
        res.json({ message: "Department deleted successfully" });
      } else {
        res.status(404).json({ message: "Department not found" });
      }
    }
  });
});

//-------------------(split)-----------------------
//DONE Create peer feedback (DANIEL)
app.post("/peerfeedback", (req, res) => {
  const { peer_feedback_id, date, feedback_text, staff_id, peer_id } = req.body; // Creating the feedback

  const q =
    "INSERT INTO peerfeedback (peer_feedback_id, date, feedback_text, staff_id, peer_id) VALUES (?, ?, ?, ?, ?)";

  db.query(q, [peer_feedback_id, date, feedback_text, staff_id, peer_id], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//DONE Read peer feedback (DANIEL)
app.get("/peerfeedback", (req, res) => {
  const q = "SELECT * FROM peerfeedback";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//DONE Update peer feedback (DAMIEN)

app.put("/peerfeedback", (req, res) => {
  const { peer_feedback_id, date, feedback_text, staff_id, peer_id } = req.body;

  const q = "UPDATE peerfeedback SET date = ?, feedback_text = ?, staff_id = ?, peer_id = ? WHERE peer_feedback_id = ?";
  
  db.query(q, [date, feedback_text, staff_id, peer_id, peer_feedback_id], (err, result) => {
    console.log("SQL Query:", q);
    console.log("SQL Parameters:", [date, feedback_text, staff_id, peer_id, peer_feedback_id]);
    console.log("SQL Result:", result);

    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ message: "Internal Server Error", error: err });
    }

    if (result.affectedRows > 0) {
      return res.json({
        message: "PeerFeedback updated successfully",
        result,
      });
    } else {
      return res.status(404).json({ message: "PeerFeedback not found" });
    }
  });
});

//DONE Delete peer feedback (En Quan)
app.delete("/peerfeedback", (req, res) => {
  const { peerFeedbackId } = req.body;

  const q = "DELETE FROM peerfeedback WHERE peer_feedback_id = ?";
  db.query(q, [peerFeedbackId], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error deleting peer feedback" });
    } else {
      if (data.affectedRows > 0) {
        res.json({ message: "Peer feedback deleted successfully" });
      } else {
        res.status(404).json({ message: "Peer feedback not found" });
      }
    }
  });
});

//---------------------DANIEL-----------------------
//Done Create self feedback (DAMIEN)

// Route for creating a self evaluation
app.post("/selffeedback", (req, res) => {
  const vals = [
    req.body.self_feedback_id,
    req.body.date,
    req.body.feedback_text,
    req.body.staff_id,
  ]; // retrieve the values from front end
  db.query(
    "INSERT INTO selffeedback (`self_feedback_id`, `date`, `feedback_text`, `staff_id`) VALUES (?, ?, ?, ?);",
    vals,
    (err, data) => {
      if (err) return res.json(err); // querying and returning errors if errors exist.
      return res.json(data); // returns data if no errors
    }
  );
});
//DONE Read self feedback (DANIEL)
app.get("/selffeedback", (req, res) => {
  db.query("SELECT * FROM selffeedback;", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
//DONE Update self feedback (DAMIEN)

app.put("/selffeedback/:id", (req, res) => {
  const vals = [
    req.body.feedback_text,
    req.body.self_feedback_id,
    req.body.staff_id,
  ]; // retrieving from front end
  db.query(
    "UPDATE selffeedback SET feedback_text = ? WHERE self_feedback_id = ? AND staff_id = ?;",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});
//DONE Delete self feedback (DANIEL)

app.delete("/selffeedback", (req, res) => {
  const { self_feedback_id } = req.body;

  const q = "DELETE FROM selffeedback WHERE self_feedback_id = ?";
  db.query(q, [self_feedback_id], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error deleting self-feedback" });
    } else {
      if (data.affectedRows > 0) {
        res.json({ message: "Self-Feedback deleted successfully" });
      } else {
        res.status(404).json({ message: "SelfFeedback not found" });
      }
    }
  });
});
//----------------------FIRDAUS----------------------
// DONE Create manager feedback (EN QUAN)
app.post("/managerfeedback", (req, res) => {
  const { managerFb, date, feedbackText, staffId } = req.body; // Creating the feedback

  const q =
    "INSERT INTO managerfeedback (manager_feedback_id, date, feedback_text, staff_id) VALUES (?, ?, ?, ?)";

  db.query(q, [managerFb, date, feedbackText, staffId], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//DONE Update manager feedback (FIRDAUS)
app.put("/managerfeedback", (req, res) => {
  const { managerfeedbackid, feedbacktext } = req.body;

  const q = "UPDATE managerfeedback SET feedback_text = ? WHERE manager_feedback_id = ?";
  db.query(q, [feedbacktext, managerfeedbackid], (err, result) => {
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

//DONE Read manager feedback (EN QUAN)
app.get("/managerfeedback", (req, res) => {
  const q = "SELECT * FROM managerfeedback";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//DONE Delete manager feedback (FIRDAUS)
app.delete("/managerfeedback", (req, res) => {
  const {Managerfeedbackid} = req.body;

  const q = "DELETE FROM managerfeedback WHERE manager_feedback_id = ?";
    db.query(q, [Managerfeedbackid], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error deleting feedback" });
    } else {
      if (data.affectedRows > 0) {
        res.json({ message: "Feedback deleted successfully" });
      } else {
        res.status(404).json({ message: "Feedback not found" });
      }
    }
  });
});

//-----------------------DANIEL-------------------------
//Done Create accolades (DANIEL)
app.post("/accolate", (req, res) => {
  const { accolate_id, staff_id, accolate_title, completion_date } = req.body; // Creating the feedback

  const q =
    "INSERT INTO accolate (accolate_id, staff_id, accolate_title, completion_date) VALUES (?, ?, ?, ?)";

  db.query(q, [accolate_id, staff_id, accolate_title, completion_date], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});


//Done Read accolades (DANIEL)

app.get("/accolate", (req, res) => {
  db.query("SELECT * FROM accolate;", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//DONE Update accolades (DANIEL)

app.put("/accolate", (req, res) => {
  const { accolate_id, accolate_title, staff_id, completion_date } = req.body;

  const q = "UPDATE accolate SET accolate_title = ?, staff_id = ?, completion_date = ? WHERE accolate_id = ?";
  
  db.query(q, [accolate_title, staff_id, completion_date, accolate_id], (err, result) => {
    console.log("SQL Query:", q);
    console.log("SQL Result:", result);

    if (err) return res.json(err);
    if (result.affectedRows > 0) {
      return res.json({
        message: "Accolades updated successfully",
        result,
      });
    } else {
      return res.status(404).json({ message: "Accolades not found" });
    }
  });
});


//Done Delete accolades (DANIEL)

app.delete("/accolate", (req, res) => {
  const { accolate_id } = req.body;

  const q = "DELETE FROM accolate WHERE accolate_id = ?";
  db.query(q, [accolate_id], (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error deleting accolades" });
    } else {
      if (data.affectedRows > 0) {
        res.json({ message: "accolades deleted successfully" });
      } else {
        res.status(404).json({ message: "accolades not found" });
      }
    }
  });
});

//---------------------------END OF CRUD---------------------------

app.listen(3001, () => {
  // set port, listen for requests
  console.log("listening on port 3001...");
});

// Done by Damien, Firdaus, En Quan, and Daniel
