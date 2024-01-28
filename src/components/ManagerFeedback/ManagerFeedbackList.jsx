import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ManagerNavbar from "../NavBar/ManagerNavBar";

const ManagerFeedbackList = () => {
  // State to store feedback data
  const [feedbackList, setFeedbackList] = useState([]);

  // Get access to the history object
  const history = useHistory();

  // Fetch feedback data from the server when the component mounts
  useEffect(() => {
    axios.get("http://localhost:3001/managerfeedback").then((response) => {
      setFeedbackList(response.data);
    });
  }, []); // Empty dependency array ensures useEffect runs only once

  // Handle redirection to the update page for a selected feedback ID
  const handleUpdate = (id) => {
    history.push(`/updatefeedback/${id}`);
  };

  // Handle deletion of feedback
  const handleDelete = (id) => {
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
      {/* Render ManagerNavbar component */}
      <ManagerNavbar />

      <div>
        <h2>Feedback List</h2>
        {/* Table to display feedback data */}
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
            {/* Map through feedbackList to render table rows */}
            {feedbackList.map((feedback) => (
              <tr key={feedback.manager_feedback_id}>
                <td>{feedback.staff_id}</td>
                <td>{feedback.date}</td>
                <td>{feedback.feedback_text}</td>
                <td>
                  {/* Buttons to update and delete feedback */}
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

      {/* Link to add new Manager Feedback for an employee */}
      <a href="/ManagerFeedback"> Add New Manager Feedback for an employee</a>
      <br></br>
    </div>
  );
};

export default ManagerFeedbackList;
