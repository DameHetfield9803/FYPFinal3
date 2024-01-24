// HR Homepage
import { Link } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./";
import "./Home.css";

export default function Home() {
  const history = useHistory();

  return (
    <div className="HR-container">
      <strong>Human Resource / Admin</strong>
      <Link to="/Attendance">Attendance</Link> <br></br>
      <Link to="/Accolades">Accolades</Link>
      <br></br>
      <Link to="/AppraisalForm">AppraisalForm</Link>
      <br></br>
      <Link to="/AppraisalItem">AppraisalItem</Link>
      <br></br>
      <Link to="/Employee">Employee</Link>
      <br></br>
      <Link to="/PeerEvaluation">PeerEvaluation</Link>
      <br></br>
      <Link to="/SelfEvaluation">SelfEvaluation</Link>
      <br></br>
      <Link to="/ReportForm">ReportForm</Link>
      <br></br>
      <Link to="/ManagerFeedback">ManagerFeedback</Link>
      <br></br>
      <Link to="/userguides">UserGuide</Link>
      <br></br>
    </div>
  );
}
