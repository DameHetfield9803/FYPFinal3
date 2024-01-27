import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function SelfEvaluationSuccess() {
  return (
    <div>
      <NavBar />

      <h1>Your Self Feedback Has Been Successfully Sent.</h1>
      <br></br>

      <div style={{ textAlign: "center" }}>
        <Link to="/home">
          <button style={{ marginRight: "10px" }}>Go to Home</button>
        </Link>

        <Link to="/selfevaluationlist">
          <button>View Your Self Evaluation Here</button>
        </Link>
      </div>
    </div>
  );
}
