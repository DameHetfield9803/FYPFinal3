import axios from "axios";
import { useState, useEffect } from "react"
export default function UpdateEmployeeJobRole(){
    const [staff_id, getstaff_id] = useState(0);
    useEffect(() => {
            axios.get("http://localhost:3001/get")
    })
    return(
        <div className="container text-center">
            <h1><strong>Update Employee Job Role</strong></h1>
            <form method="post" action="http://localhost:3001/updateempjobrole">

            </form>
        </div>
    );
}