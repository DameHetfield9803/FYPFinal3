import React from 'react';
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../NavBar/NavBar";
import "./Home.css";

export default function Home() {
  const history = useHistory();

  const logout = async () => {
    try {
      await signOut(auth);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/*Start of Dashboard Contents*/}
      <div>
        <Navbar> </Navbar>
        <h1>Homepage Quick Access</h1>
        <div className="general-container">
          
          <strong>Employee</strong>
          <a href="/Attendance">Attendance</a> <br></br>
          <a href="/Accolades">Accolades</a><br></br>
          <a href="/PeerEvaluation">PeerEvaluation</a><br></br>
          <a href="/SelfEvaluation">SelfEvaluation</a><br></br>
          <a href="/ManagerFeedback">ManagerFeedback</a><br></br>
          <a href="/ReportForm">ReportForm</a><br></br>
          <a href="/userguides">UserGuide</a><br></br>

        </div>

      </div>

      <div className="manager-container text-xl">
        <strong>Manager</strong>

        <a href="/Attendance">Attendance</a> <br></br>
        <a href="/AppraisalForm">AppraisalForm</a><br></br>
        <a href="/Employee">Employee Table</a><br></br>
        <a href="/PeerEvaluation">PeerEvaluation</a><br></br>
        <a href="/SelfEvaluation">SelfEvaluation</a><br></br>
        <a href="/ReportForm">ReportForm</a><br></br>
        <a href="/userguides">UserGuide</a><br></br>
      </div>

      <div className="HR-container">

        <strong>Human Resource</strong>
        <a href="/Attendance">Attendance</a> <br></br>
        <a href="/Accolades">Accolades</a><br></br>
        <a href="/AppraisalForm">AppraisalForm</a><br></br>
        <a href="/AppraisalItem">AppraisalItem</a><br></br>
        <a href="/Employee">Employee</a><br></br>
        <a href="/PeerEvaluation">PeerEvaluation</a><br></br>
        <a href="/SelfEvaluation">SelfEvaluation</a><br></br>
        <a href="/ReportForm">ReportForm</a><br></br>
        <a href="/ManagerFeedback">ManagerFeedback</a><br></br>
        <a href="/userguides">UserGuide</a><br></br>
      </div>



      <div id="Home" className="LogoutButton">
        <h1>Homepage Contents</h1>
        <button onClick={logout}>LOGOUT</button>
        <p>Charts (updated monthly)</p>
      </div>
      {/*End of Dashboard Contents*/}
    </div>
  );
}


