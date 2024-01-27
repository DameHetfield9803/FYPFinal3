import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory } from "react-router-dom";
import ManagerNavbar from "../NavBar/ManagerNavBar";

const ManagerFeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const history = useHistory(); // Get access to the history object

  useEffect(() => {
    // Fetch feedback data from the server
    axios.get("http://localhost:3001/managerfeedback").then((response) => {
      setFeedbackList(response.data);
    });
  }, []);

  const handleUpdate = (id) => {
    // Redirect to the update page for the selected feedback ID
    history.push(`/updatefeedback/${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    axios.delete(`http://localhost:3001/managerfeedback/${id}`).then(() => {
      console.log("Feedback deleted successfully!");
      // Update local state after deletion
      setFeedbackList((prevFeedbackList) =>
        prevFeedbackList.filter(
          (feedback) => feedback.manager_feedback_id !== id
        )
      );
    });
  };

  return (
    <div>
      <ManagerNavbar />
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
                  <button
                    onClick={() => handleUpdate(feedback.manager_feedback_id)}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(feedback.manager_feedback_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="/ManagerFeedback"> Add New Manager Feedback for an employee</a>
      <br></br>
    </div>
  );
};

export default ManagerFeedbackList;
