import { Link } from "react-router-dom";
import React from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../NavBar/NavBar";
import "./Home.css";
import Forbidden from "../.././pages/Forbidden";
import axios from "axios";

function loginAction(){
  axios.post("http://localhost:3001/getempjobrole").then(function(response){
    console.log(response);
  })
}

export default function Home() {
  const history = useHistory();
  const role = loginAction()
  if(loginAction === "employee"){
    return(
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
    )
  }
  else if (loginAction === "manager"){
    return(
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
      </div>
    )
  }
  else if(loginAction === "admin" && loginAction === "human resource"){
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
  }
  else{
    return (
      <div>
        <Forbidden/>
      </div>
    )
  }
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
          <br></br>
        </div>
      </div>

      <div className="manager-container text-xl">
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
      </div>

      <div className="HR-container">
        <strong>Human Resource / Admin</strong>
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
    </div>
  );
}
