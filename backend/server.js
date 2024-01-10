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

// example of getting something from somewhere taking parameters request and response 
app.get('', (req,res) => {
    const sql = "SELECT * FROM ";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error retrieving data from database:', err);
            return res.json({ Message: "Error retrieving data from database" });
        }
        return res.json(result);
    });
});

// delete employee
async function delEmp(name,id) 
{
    await db.query(`DELETE ${id} FROM employee.id WHERE IS ${name};`);
    return delEmp();
}


//Accolades (Create new accolates)
async function postAcco(title,id)
{
    await db.query(`CREATE ${title} FROM accolate.id WHERE IS ${id}}`)
    return postAcco();
}

//Accolades (Update accoldates)
async function updateAcco(id, title)
{
    await db.query(`UPDATE ${title} FROM accolate.id WHERE IS ${id}}`)
    return updateAcco();

}
//Accoldates (Delete accolades)
async function delAcco(title, id )
{
    await db.query(`DELETE ${title} FROM accolate.title WHERE IS ${id}`)
    return delAcco();
}

//Accolades (View accolades)
async function viewAcco(title , id)
{
    await db.query(`VIEW ${title} FROM accolate.title WHERE IS ${id}`)
    return viewAcco();
}

//Peer Evaulation 

//Self Evaulation 

//Manager Feedback 

//Profile 

//Attendance

app.listen(8081, () => {
    console.log("listening on port 8081...");
});

