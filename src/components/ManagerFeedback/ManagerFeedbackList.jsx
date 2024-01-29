import React, { useState, useEffect } from "react";
import axios from "axios";
import ManagerNavBar from "../NavBar/ManagerNavBar";

const ManagerFeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [feedbackData, setFeedbackData] = useState({
    manager_feedback_id: "",
    feedback_text: "",
    staff_id: "",
    op1: "",
    op2: "",
    op3: "",
    op4: "",
    op5: "",
    op6: "",
    op7: "",
    op8: "",
    op9: "",
    op10: "",
    op11: "",
    op12: "",
    date: ""
  });

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  const fetchFeedbackList = async () => {
    try {
      const response = await axios.get("http://localhost:3001/managerfeedback");
      setFeedbackList(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching manager feedback:", error);
      setError("Error fetching manager feedback. Please check your server and try again.");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this manager feedback?");
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3001/managerfeedback/${id}`);
      setPopupMessage("Manager feedback deleted successfully");
      setShowPopup(true);
      fetchFeedbackList();
    } catch (error) {
      console.error("Error deleting manager feedback:", error);
    }
  };

  const handleEdit = (feedback) => {
    setSelectedFeedback(feedback);
    setFeedbackData({
      manager_feedback_id: feedback.manager_feedback_id,
      feedback_text: feedback.feedback_text,
      staff_id: feedback.staff_id,
      op1: feedback.op1,
      op2: feedback.op2,
      op3: feedback.op3,
      op4: feedback.op4,
      op5: feedback.op5,
      op6: feedback.op6,
      op7: feedback.op7,
      op8: feedback.op8,
      op9: feedback.op9,
      op10: feedback.op10,
      op11: feedback.op11,
      op12: feedback.op12,
      date: feedback.date
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
    try {
      console.log("Submitting form...", feedbackData);
      await axios.put(`http://localhost:3001/managerfeedback/${selectedFeedback.manager_feedback_id}`, feedbackData);
      console.log("Manager feedback updated successfully");
      setPopupMessage("Manager feedback updated successfully");
      setShowPopup(true);
      fetchFeedbackList();
      setSelectedFeedback(null);
      // Reset feedbackData state to initial values
      setFeedbackData({
        manager_feedback_id: "",
        feedback_text: "",
        staff_id: "",
        op1: "",
        op2: "",
        op3: "",
        op4: "",
        op5: "",
        op6: "",
        op7: "",
        op8: "",
        op9: "",
        op10: "",
        op11: "",
        op12: "",
        date: ""
      });
    } catch (error) {
      console.error("Error updating manager feedback:", error);
    }
  };

  return (
    <div>
      {/* Render ManagerNavBar component */}
      <ManagerNavBar />

      <div>
        <h2>Feedback List</h2>
        {/* Table to display feedback data */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Date</th>
              <th>Comments</th>
              <th>Options</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbackList.map((feedback) => (
              <tr key={feedback.manager_feedback_id}>
                <td>{feedback.staff_id}</td>
                <td>{feedback.date}</td>
                <td>
                  {feedback.feedback_text}
                </td>
                <td>
                  <ul>
                    <li><strong>Op1:</strong> {feedback.op1}</li>
                    <li><strong>Op2:</strong> {feedback.op2}</li>
                    <li><strong>Op3:</strong> {feedback.op3}</li>
                    <li><strong>Op4:</strong> {feedback.op4}</li>
                    <li><strong>Op5:</strong> {feedback.op5}</li>
                    <li><strong>Op6:</strong> {feedback.op6}</li>
                    <li><strong>Op7:</strong> {feedback.op7}</li>
                    <li><strong>Op8:</strong> {feedback.op8}</li>
                    <li><strong>Op9:</strong> {feedback.op9}</li>
                    <li><strong>Op10:</strong> {feedback.op10}</li>
                    <li><strong>Op11:</strong> {feedback.op11}</li>
                    <li><strong>Op12:</strong> {feedback.op12}</li>
                  </ul>
                </td>
                <td>
                  <button onClick={() => handleEdit(feedback)}>Edit</button>
                  <button onClick={() => handleDelete(feedback.manager_feedback_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="peer-feedback-popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      {/* Manager feedback edit form */}
      {selectedFeedback && (
        <div>
          <h3>Edit Manager Feedback</h3>
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
            {/* Option inputs */}
            <label>
              Op1:
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
              Op2:
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
              Op3:
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
              Op4:
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
              Op5:
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
              Op6:
              <input
                type="text"
                name="op6"
                value={feedbackData.op6}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op7:
              <input
                type="text"
                name="op7"
                value={feedbackData.op7}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op8:
              <input
                type="text"
                name="op8"
                value={feedbackData.op8}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op9:
              <input
                type="text"
                name="op9"
                value={feedbackData.op9}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op10:
              <input
                type="text"
                name="op10"
                value={feedbackData.op10}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op11:
              <input
                type="text"
                name="op11"
                value={feedbackData.op11}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Op12:
              <input
                type="text"
                name="op12"
                value={feedbackData.op12}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button type="submit">Update Manager Feedback</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManagerFe