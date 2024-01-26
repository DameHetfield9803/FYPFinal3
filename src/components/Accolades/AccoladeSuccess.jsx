import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";


const AccoladeSuccess = () => {
  return (
    <div>
      <NavBar />
      <h1>Your accolade has been added successfully!</h1>
     
      <div style={{ textAlign: "center" }}>
      <Link to="/home">
          <button style={{ marginRight: "10px" }}>Go to Home Page</button>
        </Link>
        <Link to="/addaccolades">
          <button style={{ marginRight: "10px" }}>Add Another Accolades</button>
        </Link>

        <Link to="/viewaccolades">
          <button>View Accolades List</button>
        </Link>
    </div>
    </div>
  );
};

export default AccoladeSuccess;
