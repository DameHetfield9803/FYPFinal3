import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function PeerEvaluationSuccess() {
  return (
    <div>
      <NavBar />

      <h1>Your Peer Feedback Of An Employee Has Been Successfully Sent.</h1>
      <br></br>

      <div style={{ textAlign: "center" }}>
        <Link to="/home">
          <button style={{ marginRight: "10px" }}>Go to Home</button>
        </Link>

        <Link to="/peerevaluation">
          <button style={{ marginRight: "10px" }}>
            Add Another peer Feedback
          </button>
        </Link>

        <Link to="/peerevaluationlist">
          <button>View Feedback List</button>
        </Link>
      </div>
    </div>
  );
}
