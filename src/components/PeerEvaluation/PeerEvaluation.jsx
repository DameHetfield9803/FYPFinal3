import React, { useState, useEffect } from "react";
import axios from "axios";

function PeerEvalList() {
  const [peerFeedbackList, setPeerFeedbackList] = useState([]);

  useEffect(() => {
    // Fetch peer feedback forms for the logged-in user
    axios.get("http://localhost:3001/peerfeedback").then((response) => {
      setPeerFeedbackList(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality
    axios.delete(`http://localhost:3001/peerfeedback/${id}`).then(() => {
      // Update the state after successful deletion
      setPeerFeedbackList((prevList) =>
        prevList.filter((feedback) => feedback.id !== id)
      );
      console.log("Feedback deleted successfully");
    });
  };

  // You can add more functions for updating feedback if needed

  return (
    <div>
      <h1>Peer Evaluation List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Date</th>
            {/* Add more table headers based on your feedback form fields */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {peerFeedbackList.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.staff_id}</td>
              <td>{feedback.date}</td>
              {/* Display more feedback fields based on your feedback form */}
              <td>
                <button
                  className="btn btn-info mr-2"
                  onClick={() => {
                    // Implement read functionality
                    console.log("Read feedback with ID: ", feedback.id);
                  }}
                >
                  Read
                </button>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleDelete(feedback.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    // Implement update functionality
                    console.log("Update feedback with ID: ", feedback.id);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeerEvalList;
