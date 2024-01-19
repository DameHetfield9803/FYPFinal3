import React from "react";
import { useState } from "react";
import axios from "axios";

const AddMF = () => {
  const [index, setIndex] = useState[0];

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/managerfeedback");
    } catch (err) {}
  };

  return (
    <div className="form">
      <h1>Add Mananger Feedback Form</h1>
      <br></br>
      <select>
        <option value={0}>Please select</option>
        <option value={1}>1</option>
        <option value={2}>2</option>

        <textarea
          className="textarea"
          required
          rows="6"
          name="comments"
          id="feedback_comments"
          placeholder="type something..."
        ></textarea>
      </select>
    </div>
  );
};

export default AddMF;
