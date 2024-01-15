import React from "react";
import { useState } from "react";
import axios from "axios";

const AddMF = () => {
  const [mf, setMF] = useState;
  return (
    <div className="form">
      <h1>Add New Manager Feedack</h1>
      <input type="text" placeholder="type something..." />
    </div>
  );
};

export default AddMF;
