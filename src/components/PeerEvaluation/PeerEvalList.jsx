import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeNavBar from '../NavBar/EmployeeNavBar';
import "./PeerFeedbackList.css";
import { useHistory } from "react-router-dom";

const PeerFeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [feedbackData, setFeedbackData] = useState({
    peer_feedback_id: "",
    feedback_text: "",
    staff_id: "",
    op1: "",
    op2: "",
    op3: "",
    op4: "",
    op5: "",
    op6: "",
    op7: "",
    date: ""
  });
  const history = useHistory();

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  const fetchFeedbackList = async () => {
    try {
      const response = await axios.get("http://localhost:3001/peerfeedback");
      setFeedbackList(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching peer feedback:", error);
      setError("Error fetching peer feedback. Please check your server and try again.");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this peer feedback?");
    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete("http://localhost:3001/peerfeedback", { data: { peer_feedback_id: id } });
      setPopupMessage("Peer feedback deleted successfully");
      setShowPopup(true);
      fetchFeedbackList();
    } catch (error) {
      console.error("Error deleting peer feedback:", error);
    }
  };

  const handleEdit = (feedback) => {
    setSelectedFeedback(feedback);
    setFeedbackData({
      peer_feedback_id: feedback.peer_feedback_id,
      feedback_text: feedback.feedback_text,
      staff_id: feedback.staff_id,
      op1: feedback.op1,
      op2: feedback.op2,
      op3: feedback.op3,
      op4: feedback.op4,
      op5: feedback.op5,
      op6: feedback.op6,
      op7: feedback.op7,
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
      await axios.put(`http://localhost:3001/peerfeedback/${selectedFeedback.peer_feedback_id}`, feedbackData);
      setPopupMessage("Peer feedback updated successfully");
      setShowPopup(true);
      fetchFeedbackList();
    } catch (error) {
      console.error("Error updating peer feedback:", error);
    }
  };

  return (
    <div className="peer-feedback-container">
      <EmployeeNavBar></EmployeeNavBar>
      <h1>Peer Feedback</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <table className="peer-feedback-table">
        <thead>
          <tr>
            <th>Peer Feedback ID</th>
            <th>Staff ID</th>
            <th>Date</th>
            <th>Feedback Text</th>
            <th>Options</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.peer_feedback_id}</td>
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
                  <li><strong>Op7:</strong> {feedback.op7}</li>
                </ul>
              </td>
              <td>
                <button onClick={() => handleEdit(feedback)}>Edit</button>
                <button onClick={() => handleDelete(feedback.peer_feedback_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup message */}
      {showPopup && (
        <div className="peer-feedback-popup">
          <p>{popupMessage}</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}

      {/* Peer feedback edit form */}
      {selectedFeedback && (
        <div>
          <h3>Edit Peer Feedback</h3>
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
  Op1(The team member was cooperative):
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
  Op2(This team member completed the task assigned to our team):
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
  Op3(This team member did more than what was expected):
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
  Op4(This team member contributed useful ideas.):
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
  Op5(This team member has strong interpersonal skills and helps everyone feel welcome on the team):
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
  Op6(This team member contributed useful ideas):
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
  Op7(This team member exhibits strong leadership skills):
  <input
    type="text"
    name="op7"
    value={feedbackData.op7}
    onChange={handleChange}
    required
  />
</label>
<br />

            <button type="submit">Update Peer Feedback</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PeerFeedbackList;
