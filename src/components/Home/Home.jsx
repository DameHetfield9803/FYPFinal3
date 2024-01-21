import { Link } from "react-router-dom";
import React from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../NavBar/NavBar";
import "./Home.css";

export default function Home() {
  const history = useHistory();

  return (
    <div>
      {/*Start of Dashboard Contents*/}
      <div>
        <Navbar />
        <div className="central-font">
          <h1>Homepage Quick Access</h1>
        </div>
        <div className="general-container">
          <strong>Employee</strong>
          <Link to="/Attendance">Attendance</Link> <br></br>
          <Link to="/Accolades">Accolades</Link>
          <br></br>
          <Link to="/PeerEvaluation">PeerEvaluation</Link>
          <br></br>
          <Link to="/SelfEvaluation">SelfEvaluation</Link>
          <br></br>
          <Link to="/ManagerFeedback">ManagerFeedback</Link>
          <br></br>
          <Link to="/ReportForm">ReportForm</Link>
          <br></br>
          <Link to="/userguides">UserGuide</Link>
          <br></br>
        </div>
      </div>

      <div className="manager-container text-xl">
        <strong>Manager</strong>
        <Link to="/Attendance">Attendance</Link> <br></br>
        <Link to="/AppraisalForm">AppraisalForm</Link>
        <br></br>
        <Link to="/Employee">Employee Table</Link>
        <br></br>
        <Link to="/PeerEvaluation">PeerEvaluation</Link>
        <br></br>
        <Link to="/SelfEvaluation">SelfEvaluation</Link>
        <br></br>
        <Link to="/ReportForm">ReportForm</Link>
        <br></br>
        <Link to="/userguides">UserGuide</Link>
        <br></br>
        <Link to="/ManagerFeedback">ManagerFeedback</Link>
        <br></br>
      </div>

      <div className="HR-container">
        <strong>Human Resource</strong>
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
    </div>
  );
}
