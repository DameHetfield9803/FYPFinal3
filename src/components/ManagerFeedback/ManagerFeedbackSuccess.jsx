import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function ManagerFeedbackSuccess() {
  return (
    <div>
      <NavBar />

      <h1>Your Feedback Of An Employee Has Been Successfully Sent.</h1>
      
      <div style={{ textAlign: "center" }}>
        <Link to="/home">
          <button style={{ marginRight: "10px" }}>Go to Home</button>
        </Link>

        <Link to="/managerfeedback">
          <button style={{ marginRight: "10px" }}>Add Another Manager Feedback</button>
        </Link>

        <Link to="/feedbacklist">
          <button>View Feedback List</button>
        </Link>
      </div>
    </div>
  );
}
