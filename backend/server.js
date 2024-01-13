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

//TODO Read employee (EN QUAN)

//TODO Update employee (DAMIEN)

//TODO Delete employee (DAMIEN)

//---------------------------------------
//TODO Create department (EN QUAN)

//TODO Read department (DAMIEN)

//TODO Update department (DAMIEN)

//TODO Delete department (EN QUAN)

//-------------------(split)-----------------------
//TODO Create peer feedback

//TODO Read peer feedback

//TODO Update peer feedback (DAMIEN)

//TODO Delete peer feedback

//---------------------DANIEL-----------------------
//TODO Create self feedback (DAMIEN)

//TODO Read self feedback (DANIEL)

//TODO Update self feedback (DAMIEN)

//TODO Delete self feedback (EN QUAN)

//----------------------FIRDAUS----------------------
//TODO Create manager feedback

//TODO Read manager feedback

//TODO Update manager feedback

//TODO Delete manager feedback

//-----------------------DANIEL-------------------------
//TODO Create accolades

//TODO Read accolades

//TODO Update accolades

//TODO Delete accolades

//---------------------------END OF CRUD---------------------------

app.listen(3001, () => {
  // set port, listen for requests
  console.log("listening on port 3001...");
});

// Done by Damien, Firdaus, En Quan, and Daniel.
