// Employee Homepage
import { Link } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import EmployeeNavBar from "./EmployeeNavBar";
import "./Home.css";

export default function Home() {
  const history = useHistory();

  return (
    <div className="Employee-container">
      <EmployeeNavBar></EmployeeNavBar>
      <strong>Employee</strong>
      <Link to="/Attendance">Attendance</Link>
      <br></br>
      <Link to="/Accolades">Accolades</Link>
      <br></br>
      <Link to="/AppraisalItem">AppraisalItem</Link>
      <br></br>
      <Link to="/PeerEvaluation">PeerEvaluation</Link>
      <br></br>
      <Link to="/SelfEvaluation">SelfEvaluation</Link>
      <br></br>
      <Link to="/userguides">UserGuide</Link>
      <br></br>
    </div>
  );
}

