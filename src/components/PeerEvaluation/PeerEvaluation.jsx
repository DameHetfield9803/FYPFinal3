import { useState } from "react";
import "./PeerEvaluation.css";
import Navbar from "../NavBar/NavBar";
import axios from "axios";
import moment from "moment";

export default function PeerEvaluation() {
  //hooks
  const [staffId, setStaffId] = useState(null);
  const [date, setDate] = useState("");
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

  const validateForm = () => {
    const errors = {};

    // Validate staffId
    if (!staffId || isNaN(staffId) || parseInt(staffId) <= 0) {
      errors.staffId = "Staff ID is required and must be a positive integer";
    }

    // Validate date format and number of days && months
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!date.match(dateRegex)) {
      errors.date = "Date should be in the format YYYY/MM/DD";
    } else {
      const isValidDate = moment(date, "YYYY/MM/DD", true).isValid();

      if (!isValidDate) {
        errors.date = "Invalid date";
      } else {
        const day = moment(date, "YYYY/MM/DD").date();
        const month = moment(date, "YYYY/MM/DD").month() + 1; // months are 0-indexed

        if (day < 1 || day > 31) {
          errors.date = "Day should be between 1 and 31";
        }

        if (month < 1 || month > 12) {
          errors.date = "Month should be between 1 and 12";
        }
      }
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

  const handleClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:3001/createpeerfeedback/", {
          feedback_text: feedback_text,
          date: date,
          staff_id: staffId,
          op1: op1,
          op2: op2,
          op3: op3,
          op4: op4,
          op5: op5,
          op6: op6,
          op7: op7,
        })
        .then(() => {
          console.log("Successfully added to database!");
          window.alert("Successfully Added!");
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
            <label htmlFor="staffId">Staff ID:</label>
            <input
              placeholder="Ex: 1"
              type="number"
              id="staffId"
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
              required
            />
            {formErrors.staffId && (
              <p className="error">{formErrors.staffId}</p>
            )}
            <br></br>
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Format: (YYYY/MM/DD)"
              required
            />
            {formErrors.date && <p className="error">{formErrors.date}</p>}

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
