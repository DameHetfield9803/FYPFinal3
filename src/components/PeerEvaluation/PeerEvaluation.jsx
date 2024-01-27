import { useState, useEffect } from "react";
import "./PeerEvaluation.css";
import Navbar from "../NavBar/NavBar";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function PeerEvaluation() {
  //hooks
  const [staffId, setStaffId] = useState(null);
  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [op3, setOp3] = useState(0);
  const [op4, setOp4] = useState(0);
  const [op5, setOp5] = useState(0);
  const [op6, setOp6] = useState(0);
  const [op7, setOp7] = useState(0);
  const [feedback_text, setFeedbackText] = useState("");

  // validation state
  const [formErrors, setFormErrors] = useState({});
  const [validStaffIds, setValidStaffIds] = useState([]);

  // check if staffid is in database, do a get
  useEffect(() => {
    axios.get("http://localhost:3001/peerfeedback").then((response) => {
      const feedbackData = response.data;
      // Extract staff IDs from feedbackData and set them in your state
      const ids = feedbackData.map((feedback) => feedback.staff_id);
      setValidStaffIds(ids);
    });
  }, []);

  const history = useHistory();

  const validateForm = () => {
    const errors = {};

    // Validate staffId
    if (!staffId || isNaN(staffId) || parseInt(staffId) <= 0) {
      errors.staff_Id = "Staff ID is required and must be a positive integer";
    } else if (!validStaffIds.includes(parseInt(staffId))) {
      errors.staff_Id = "Staff ID not found in the database";
    }

    // Validate options
    const options = [op1, op2, op3, op4, op5, op6, op7];
    if (options.some((option) => option === 0)) {
      errors.options = "Please select a value for all options";
    }

    // Validate feedback_text
    if (!feedback_text.trim()) {
      errors.feedback_text = "Feedback is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const calTotalScore = () => {
    return op1 + op2 + op3 + op4 + op5 + op6 + op7;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const totalScore = calTotalScore();
      axios
        .post("http://localhost:3001/createpeerfeedback/", {
          feedback_text: feedback_text,
          staff_id: staffId,
          op1: op1,
          op2: op2,
          op3: op3,
          op4: op4,
          op5: op5,
          op6: op6,
          op7: op7,
          score: totalScore,
        })
        .then(() => {
          history.push("/peerevaluationsuccess");
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <form method="post" action="localhost:3001/peerfeedback">
          <div className="container">
            <h1 className="mt-3">Peer Evaluation</h1>
            <b>
              {" "}
              <p className="mt-3">
                (Lowest Rating: 1, Neutral : 3, Highest Rating: 5)
              </p>
            </b>

            {/* Include staff_id and submission_date here */}
            <label htmlFor="staff_id">Staff ID:</label>
            <input
              placeholder="Ex: 1"
              type="number"
              id="staff_id"
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
              required
            />
            {formErrors.staffId && (
              <p className="error">{formErrors.staffId}</p>
            )}
            <br></br>

            {/* End here */}
            <table className="table table-striped mt-3">
              <tbody>
                <tr>
                  <td className="td-se-question">
                    The team member was cooperative
                  </td>
                  <td>
                    <select
                      value={op1}
                      onChange={(e) => setOp1(e.target.value)}
                    >
                      <option value={0}>Choose option </option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="td-se-question">
                    This team member completed the task assigned to our team.
                  </td>
                  <td className="td-se-question">
                    <select
                      value={op2}
                      onChange={(e) => setOp2(e.target.value)}
                    >
                      <option value={0}>Choose option</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="td-se-question">
                    This team member did more than what was expected.
                  </td>
                  <td>
                    <select
                      value={op3}
                      onChange={(e) => setOp3(e.target.value)}
                    >
                      <option value={0}>Choose option</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5 </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="td-se-question">
                    This team member contributed useful ideas.
                  </td>
                  <td>
                    <select
                      value={op4}
                      onChange={(e) => setOp4(e.target.value)}
                    >
                      <option value={0}>Choose option</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="td-se-question">
                    This team member has strong interpersonal skills and helps
                    everyone feel welcome on the team.{" "}
                  </td>
                  <td>
                    <select
                      value={op5}
                      onChange={(e) => setOp5(e.target.value)}
                    >
                      <option value={0}>Choose option</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="td-se-question">
                    This team member contributed useful ideas.
                  </td>
                  <td>
                    <select
                      value={op6}
                      onChange={(e) => setOp6(e.target.value)}
                    >
                      <option value={0}>Choose option</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td className="td-se-question">
                    This team member exhibits strong leadership skills
                  </td>
                  <td>
                    <select
                      value={op7}
                      onChange={(e) => setOp7(e.target.value)}
                    >
                      <option value={0}>Choose option</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                </tr>
                {formErrors.options && (
                  <p className="error">{formErrors.options}</p>
                )}
                <tr>
                  <td className="td-se-question"> Other Comments:</td>
                  <td>
                    <textarea
                      rows="4"
                      cols="50"
                      value={feedback_text}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      required
                    />
                    {formErrors.feedback_text && (
                      <p className="error">{formErrors.feedback_text}</p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <button
              className="btn btn-primary float-right mt-5"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
