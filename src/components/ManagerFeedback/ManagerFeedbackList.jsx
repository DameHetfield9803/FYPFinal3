import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Navbar from "../NavBar/NavBar";

const ManagerFeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Fetch feedback data from the server
    axios.get("http://localhost:3001/managerfeedback").then((response) => {
      setFeedbackList(response.data);
    });
  }, []);

  const handleUpdate = (id) => {
    // Handle update logic, navigate to the update page or modal
    console.log("Update feedback with id:", id);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    axios.delete(`http://localhost:3001/managerfeedback/${id}`).then(() => {
      console.log("Feedback deleted successfully!");
      // Update local state after deletion
      setFeedbackList((prevFeedbackList) =>
        prevFeedbackList.filter((feedback) => feedback.manager_feedback_id !== id)
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Feedback List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Date</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.map((feedback) => (
              <tr key={feedback.manager_feedback_id}>
                <td>{feedback.staff_id}</td>
                <td>{feedback.date}</td>
                <td>{feedback.feedback_text}</td>
                <td>
                  <button onClick={() => handleUpdate(feedback.manager_feedback_id)}>Update</button>
                  <button onClick={() => handleDelete(feedback.manager_feedback_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerFeedbackList;
