import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../NavBar/NavBar";
import { useHistory } from "react-router-dom";

const PeerFeedbackList= () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const history = useHistory(); // Get access to the history object

  useEffect(() => {
    // Fetch feedback data from the server
    axios.get("http://localhost:3001/peerfeedback").then((response) => {
      setFeedbackList(response.data);
    });
  }, []);

  const handleUpdate = (id) => {
    // Redirect to the update page for the selected feedback ID
    history.push(`/updatefeedback/${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    axios.delete(`http://localhost:3001/peerfeedback/${id}`).then(() => {
      console.log("Feedback deleted successfully!");
      // Update local state after deletion
      setFeedbackList((prevFeedbackList) =>
        prevFeedbackList.filter((feedback) => feedback.peer_feedback_id !== id)
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
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
              <tr key={feedback.peer_feedback_id}>
                <td>{feedback.staff_id}</td>
                <td>{feedback.date}</td>
                <td>{feedback.feedback_text}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleUpdate(feedback.peer_feedback_id)}>
                    Update
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(feedback.peer_feedback_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3">
        <a href="/PeerEvaluation" className="btn btn-success">Add New Peer Feedback for an employee</a>
      </div>
    </div>
  );
};

export default PeerFeedbackList;
