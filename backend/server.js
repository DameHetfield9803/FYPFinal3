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

//------------------------------------------
// Create employee (DAMIEN) (done)
app.post("/employee", (req, res) => {
  const values = [
    req.body.staff_id,
    req.body.staff_name,
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.reporting_to,
    req.body.department_id,
    req.body.date_joined,
    req.body.job_role,
  ];
  const sql =
    "INSERT INTO employee(`staff_id`, `staff_name`, `username`, `password`, `email`,`reporting_to`, `department_id`, `date_joined`, `job_role`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
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

// Update employee (DAMIEN) (done)
app.put("/employee", (req, res) => {
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

// Delete employee (DAMIEN) (done)
app.delete("/employee", (req, res) => {
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
app.get("/department", (req, res) => {
  const q = "SELECT * FROM department;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Update department (DAMIEN) (DONE)

// set endpoints with requests and response
app.put("/department", (req, res) => {
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

//DONE Delete department (EN QUAN)
// app.delete("/department", (req, res) => {
//   const { department_id } = req.body;

//   const q = "DELETE FROM department WHERE department_id = ?";
//   db.query(q, [department_id], (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: "Error deleting department" });
//     } else {
//       if (data.affectedRows > 0) {
//         res.json({ message: "Department deleted successfully" });
//       } else {
//         res.status(404).json({ message: "Department not found" });
//       }
//     }
//   });
// });

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

//-------------------(split)-----------------------
//DONE Create peer feedback (DANIEL)
app.post("/createpeerfeedback", (req, res) => {
  const vals = [
    req.body.feedback_text,
    req.body.date,
    req.body.staff_id,
    req.body.op1,
    req.body.op2,
    req.body.op3,
    req.body.op4,
    req.body.op5,
    req.body.op6,
    req.body.op7,
  ];
  db.query(
    "INSERT INTO `peer_feedback`(`feedback_text`, `date`, `staff_id`, `op1`,`op2`,`op3`,`op4`,`op5`,`op6`,`op7`) VALUES (? , ? , ? , ? , ?,?,?,?,?,?);",
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
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Update peer feedback (DAMIEN) (done)

app.put("/peerfeedback", (req, res) => {
  const vals = [
    req.body.date,
    req.body.feedback_text,
    req.body.staff_id,
    req.body.peer_feedback_id,
  ];
  db.query(
    "UPDATE `peerfeedback` SET `date` = (?), `feedback_text` = (?), `staff_id` = (?) WHERE `peer_feedback_id` = (?);",
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

//---------------------DANIEL-----------------------
//Done Create self feedback (DAMIEN)

// Route for creating a self evaluation
app.post("/createselffeedback", (req, res) => {
  const vals = [
    req.body.date,
    req.body.feedback_text,
    req.body.staff_id,
    req.body.op1,
    req.body.op2,
    req.body.op3,
    req.body.op4,
    req.body.op5,
    req.body.op6,
  ]; // retrieve the values from front end
  db.query(
    "INSERT INTO self_feedback ( `date`, `feedback_text`, `staff_id`,`op1`,`op2`,`op3`,`op4`,`op5`,`op6`) VALUES (?, ?, ?, ?,?,?,?,?,?);",
    vals,
    (err, data) => {
      if (err) return res.json(err); // querying and returning errors if errors exist.
      return res.json(data); // returns data if no errors
    }
  );
});
// Read self feedback (DANIEL) (Done)
app.get("/selffeedback", (req, res) => {
  db.query("SELECT * FROM self_feedback;", (err, data) => {
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
//----------------------FIRDAUS-----------------------------------
// DONE Create manager feedback (EN QUAN)
app.post("/createmanagerfeedback", (req, res) => {
  const vals = [
    // req.body.manager_feedback_id, //<== May not need this
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
    req.body.date,
  ];
  db.query(
    "INSERT INTO `manager_feedback`(`feedback_text`, `staff_id`, `op1`,`op2`,`op3`,`op4`,`op5`,`op6`,`op7`,`op8`,`op9`,`op10`,`op11`,`op12`,`date`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
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

//DONE Read manager feedback (EN QUAN)
app.get("/managerfeedback", (req, res) => {
  const q = "SELECT * FROM manager_feedback";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//DONE Delete manager feedback (FIRDAUS)
app.delete("/managerfeedback", (req, res) => {
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

//-----------------------DANIEL-------------------------
//Done Create accolades (DANIEL)
app.post("/accolade", (req, res) => {
  const val = [
    req.body.accolade_id,
    req.body.accolade_title,
    req.body.completion_date,
    req.body.staff_id,
  ];
  db.query(
    "INSERT INTO `accolade`(accolade_id, accolade_title, completion_date, staff_id) VALUES(?,?,?,?);",
    val,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//Done Read accolades (DANIEL)

app.get("/accolade", (req, res) => {
  db.query("SELECT * FROM accolade;", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//DONE Update accolades (DANIEL)

app.put("/accolade", (req, res) => {
  const vals = [
    req.body.accolade_title,
    req.body.completion_date,
    req.body.staff_id,
    req.body.accolade_id,
  ];
  db.query(
    "UPDATE `accolade` SET accolade_title = ? , completion_date = ? , staff_id = ? WHERE accolade_id = ?;",
    vals,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

//Done Delete accolades (DANIEL)

app.delete("/accolade", (req, res) => {
  const val = [req.body.accolade_id];
  db.query(
    "DELETE FROM `accolade` WHERE accolade_id = ?; ",
    val,
    (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    }
  );
});

// CRUD employee.job_role

app.get("/getempjobrole", (req,res) => {
  db.query("SELECT job_role FROM employee; ;",(err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  });
}); // TODO Firdaus

app.put("/updateempjobrole", (req, res) => {
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
//---------------------------END OF CRUD---------------------------

app.listen(3001, () => {
  // set port, listen for requests
  console.log("listening on port 3001...");
});

// Done by Damien, Firdaus, En Quan, and Daniel
