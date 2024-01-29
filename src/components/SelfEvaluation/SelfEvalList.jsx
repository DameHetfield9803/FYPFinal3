import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewSelfEvaluation.css"; 
import EmployeeNavBar from '../NavBar/EmployeeNavBar';

const SelfFeedback = () => {
  const [selfFeedbackList, setSelfFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [feedbackData, setFeedbackData] = useState({
    self_feedback_id: "",
    feedback_text: "",
    date: "",
    staff_id: "",
    op1: "",
    op2: "",
    op3: "",
    op4: "",
    op5: "",
    op6: ""
  });

  const fetchSelfFeedback = async () => {
    try {
      const response = await axios.get("http://localhost:3001/selffeedback");
      console.log("Response from server:", response.data);
      setSelfFeedbackList(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching self-feedback:", error);
      setError("Error fetching self-feedback. Please check your server and try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSelfFeedback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (feedbackId) => {
    // Validation before deletion
    const confirmDelete = window.confirm("Are you sure you want to delete this self-feedback?");
    if (!confirmDelete) {
      return; // If user cancels deletion, exit function
    }

    try {
      console.log("Deleting self-feedback with ID:", feedbackId);
      await axios.delete("http://localhost:3001/selffeedback", { data: { self_feedback_id: feedbackId } });
      console.log("Self-feedback deleted successfully");

      // Show popup message after deletion
      setPopupMessage("Self-feedback deleted successfully");
      setShowPopup(true);

      // After deletion, fetch updated self-feedback data
      fetchSelfFeedback();
    } catch (error) {
      console.error("Error deleting self-feedback:", error);
      // Handle error, show error message, etc.
    }
  };

  const handleEdit = (feedback) => {
    setSelectedFeedback(feedback);
    setFeedbackData({
      self_feedback_id: feedback.self_feedback_id,
      feedback_text: feedback.feedback_text,
      date: feedback.date,
      staff_id: feedback.staff_id,
      op1: feedback.op1,
      op2: feedback.op2,
      op3: feedback.op3,
      op4: feedback.op4,
      op5: feedback.op5,
      op6: feedback.op6
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform update request with feedbackData
    try {
      await axios.put(`http://localhost:3001/updateselffeedback/${selectedFeedback.self_feedback_id}`, {
        ...feedbackData,
        op1: feedbackData.op1,
        op2: feedbackData.op2,
        op3: feedbackData.op3,
        op4: feedbackData.op4,
        op5: feedbackData.op5,
        op6: feedbackData.op6
      });
      // Display success message
      setPopupMessage("Self-feedback updated successfully");
      setShowPopup(true);
      // Refresh self-feedback after update
      fetchSelfFeedback(); 
    } catch (error) {
      console.error("Error updating self-feedback:", error);
      // Handle error
    }
  };
  

  return (
    <div className="self-evaluation-container">
      <EmployeeNavBar />
      <h1>Self-Feedback</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <table className="self-evaluation-table">
        <thead>
          <tr>
            <th>Self-Feedback ID</th>
            <th>Staff ID</th>
            <th>Date</th>
            <th>Feedback Text</th>
            <th>Options</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selfFeedbackList.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.self_feedback_id}</td>
              <td>{feedback.staff_id}</td>
              <td>{feedback.date}</td>
              <td>{feedback.feedback_text}</td>
              <td>
                <ul>
                  <li><strong>Op1:</strong> {feedback.op1}</li>
                  <li><strong>Op2:</strong> {feedback.op2}</li>
                  <li><strong>Op3:</strong> {feedback.op3}</li>
                  <li><strong>Op4:</strong> {feedback.op4}</li>
                  <li><strong>Op5:</strong> {feedback.op5}</li>
                  <li><strong>Op6:</strong> {feedback.op6}</li>
                </ul>
              </td>
              <td>
                <button onClick={() => handleEdit(feedback)}>Edit</button>
                <button onClick={() => handleDelete(feedback.self_feedback_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup message */}
      {showPopup && (
        <div className="self-evaluation-popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      {/* Self-feedback edit form */}
      {selectedFeedback && (
        <div>
          <h3>Edit Self-Feedback</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Feedback Text:
              <input
                type="text"
                name="feedback_text"
                value={feedbackData.feedback_text}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={feedbackData.date}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Staff ID:
              <input
                type="text"
                name="staff_id"
                value={feedbackData.staff_id}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            {/* Option inputs */}
            <label>
              Op1(Do you understood what you did today.):
              <input
                type="text"
                name="op1"
                value={feedbackData.op1}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op2(Are you confident that you can apply what I have learnt.):
              <input
                type="text"
                name="op2"
                value={feedbackData.op2}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op3(I was able to do research or activities on my own.):
              <input
                type="text"
                name="op3"
                value={feedbackData.op3}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op4(I shared useful ideas and resources with my team.):
              <input
                type="text"
                name="op4"
                value={feedbackData.op4}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op5(I find the guides given to me useful for deepening my understanding):
              <input
                type="text"
                name="op5"
                value={feedbackData.op5}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op6(Do you feel that you spent the time to perform quality work?):
              <input
                type="text"
                name="op6"
                value={feedbackData.op6}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button type="submit">Update Self-Feedback</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SelfFeedback;
