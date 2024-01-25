// import { Link } from "react-router-dom";
// import React from "react";
// // import { auth } from "../../config/firebase";
// // import { signOut } from "firebase/auth";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState , useEffect } from "react"; 
import { useParams } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import "./Home.css";
import Forbidden from "../.././pages/Forbidden";
import axios from "axios";

export default function Home() {
  const { id } = useParams();
  const [job_Role, setJob_Role] = useState("");

  useEffect(() => {
    async function fetchJob_Role() {
      try {
        const response = await axios.get(`http://localhost:3001/getempjobrole/${id}`);
        const { job_Role } = response.data; // Correctly destructure 'job_Role'
        setJob_Role(job_Role);
      } catch (error) {
        console.error("Error fetching job role:", error);
      }
    }
    fetchJob_Role();
  }, [id]);

  // Adjust switch case to compare with the correct values
  switch (job_Role) {
    case "Employee":
      return (
        <div>
          <a href="/Attendance">Attendance</a> <br></br>
          <a href="/Accolades">Accolades</a>
          <br></br>
          <a href="/PeerEvaluation">PeerEvaluation</a>
          <br></br>
          <a href="/SelfEvaluation">SelfEvaluation</a>
          <br></br>
          <a href="/ManagerFeedback">ManagerFeedback</a>
          <br></br>
          <a href="/ReportForm">ReportForm</a>
          <br></br>
          <a href="/userguides">UserGuide</a>
        </div>
      );
    case "Manager":
      return (
        <div>
          <strong>Manager</strong>
          <a href="/Attendance">Attendance</a> <br></br>
          <a href="/AppraisalForm">AppraisalForm</a>
          <br></br>
          <a href="/Employee">Employee Table</a>
          <br></br>
          <a href="/PeerEvaluation">PeerEvaluation</a>
          <br></br>
          <a href="/SelfEvaluation">SelfEvaluation</a>
          <br></br>
          <a href="/ReportForm">ReportForm</a>
          <br></br>
          <a href="/userguides">UserGuide</a>
          <br></br>
          <a href="/ManagerFeedback">ManagerFeedback</a>
          <br></br>
          <a href="/feedbacklist">ViewManagerFeedbackList</a>
          <br></br>
        </div>
      );
    case "Admin":
    case "Human_Resource":
      return (
        <div className="HR-container">
          <strong>Human Resource</strong>
          <a href="/Attendance">Attendance</a> <br></br>
          <a href="/Accolades">Accolades</a>
          <br></br>
          <a href="/AppraisalForm">AppraisalForm</a>
          <br></br>
          <a href="/AppraisalItem">AppraisalItem</a>
          <br></br>
          <a href="/Employee">Employee</a>
          <br></br>
          <a href="/PeerEvaluation">PeerEvaluation</a>
          <br></br>
          <a href="/SelfEvaluation">SelfEvaluation</a>
          <br></br>
          <a href="/ReportForm">ReportForm</a>
          <br></br>
          <a href="/ManagerFeedback">ManagerFeedback</a>
          <br></br>
          <a href="/userguides">UserGuide</a>
          <br></br>
        </div>
      );
    default:
      return (
        <Forbidden/>
      );
  }
}
