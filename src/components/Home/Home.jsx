// import { Link } from "react-router-dom";
import HRNavbar from "../NavBar/HRNavBar";
import HRHomepage from "./HRHomepage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Home.css";
import Forbidden from "../.././pages/Forbidden";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function Home() {
  const { id } = useParams();
  const [job_role, setJob_Role] = useState("");
  let history = useHistory();
  useEffect(() => {
    async function fetchJob_Role() {
      try {
        const response = await axios.get(
          `http://localhost:3001/getempjobrole/${id}`
        );
        setJob_Role(response.data.job_role);
      } catch (error) {
        console.error("Error fetching job role:", error);
      }
    }
    fetchJob_Role();
  }, [id]);

  // Adjust switch case to compare with the correct values
  switch (job_role) {
    case "employee":
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
    case "manager":
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
    case "admin":
      return history.push(`/adminhome/${id}`);
    case "human resource":
      return (
        <>
          <HRNavbar />
          <HRHomepage />
        </>
      );
    default:
      return <Forbidden />;
  }
}
