import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar.jsx";
import "./ManagerFeedback.css";
import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ManagerFeedback() {
  // Hooks
  // const [isSent, setIsSent] = useState(false);
  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [op3, setOp3] = useState(0);
  const [op4, setOp4] = useState(0);
  const [op5, setOp5] = useState(0);
  const [op6, setOp6] = useState(0);
  const [op7, setOp7] = useState(0);
  const [op8, setOp8] = useState(0);
  const [op9, setOp9] = useState(0);
  const [op10, setOp10] = useState(0);
  const [op11, setOp11] = useState(0);
  const [op12, setOp12] = useState(0);
  const [comments, setComments] = useState("");

  // Helper Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      op1,
      op2,
      op3,
      op4,
      op5,
      op6,
      op7,
      op8,
      op9,
      op10,
      op11,
      op12,
      comments,
    };

    axios.post("http://localhost:3001/managerfeedback/").then((response) => {
      console.log(response.data);
    });
  };

  // Return JSX
  return (
    <>
      <NavBar />

      <div className="mb-4 small">
        <form name="feedback_form" id="feedback_form" onSubmit={handleSubmit}>
          <div className="App">
            <div className="container">
              <h1 className="mt-3">Manager Evaluation To Employees</h1>

              <b>
                {" "}
                <p className="mt-3">
                  (Lowest Rating: 1, Neutral : 3, Highest Rating: 5)
                </p>
              </b>

              <h2 className="mt-3">Work Performance</h2>

              <table className="table table-striped mt-3">
                <tbody>
                  <tr>
                    <td className="td-se-question">
                      <b>
                        Willingness to share and impact knowledge to
                        subordinates/colleagues{" "}
                      </b>{" "}
                      eg: Have a good knowledge of job , aware of the key result
                      areas , performance standards and responsibilities
                    </td>
                    <td>
                      <select
                        value={op1}
                        onChange={(e) => setOp1(e.target.value)}
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
                      <b>Quality of Work </b> eg: Accurate,Attentive to
                      details,Complete and Timely
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
                      <b>Ability to meet deadlines </b> eg: Consistency to meet
                      the deadline
                    </td>
                    <td className="td-se-question">
                      <select
                        value={op3}
                        onChange={(e) => setOp3(e.target.value)}
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
                      <b>Communication </b>eg: Effectively express and present
                      ideas and information in both oral and written form so as
                      to have the desired effect on the reader using acceptable
                      language, grammar and style bearing in mind the culture
                      and background.{" "}
                    </td>
                    <td className="td-se-question">
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
                  <h2 className="mt-3">Work Attitude</h2>
                  <tr>
                    <td className="td-se-question">
                      <b>Reliablity/Responsibility/Commitment</b> eg: Reliable
                      and responsible in all situations and does not require
                      special supervisory attention. Keen to accept
                      responsibilities.{" "}
                    </td>
                    <td className="td-se-question">
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
                      <b>Analytical Ability / Problem Solving</b> eg: Have the
                      ability to identify causes of problems and able to
                      recommend effective solutions. At times able to make
                      constructive suggestions.{" "}
                    </td>
                    <td className="td-se-question">
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
                      <b>Initiative</b> eg: Enterprising, willingly assume
                      greater responsibilities beyond his/her basic job{" "}
                    </td>
                    <td className="td-se-question">
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
                  <tr>
                    <td className="td-se-question">
                      <b>Decision-Making</b> eg: Able to make sound and decisive
                      decision
                    </td>
                    <td className="td-se-question">
                      <select
                        value={op8}
                        onChange={(e) => setOp8(e.target.value)}
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
                      <b>Reaction under Pressure</b> eg: Continue to be stable
                      and productive under pressure{" "}
                    </td>
                    <td className="td-se-question">
                      <select
                        value={op9}
                        onChange={(e) => setOp9(e.target.value)}
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
                      <b>Adaptability & Flexibility</b> eg: Adjust effectively
                      in approach and behavior to new and changed situations and
                      interacting with different people.{" "}
                    </td>
                    <td className="td-se-question">
                      <select
                        value={op10}
                        onChange={(e) => setOp10(e.target.value)}
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
                      <b>Innovation</b> eg: Have an open mindset. Demonstrates
                      originality and imagination in ideas and solutions that
                      leads to novel ways to deal with work problems and
                      opportunities.
                    </td>
                    <td className="td-se-question">
                      <select
                        value={op11}
                        onChange={(e) => setOp11(e.target.value)}
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
                      <b>Drive & Determination</b> eg: Act with drive,
                      confidence and personal commitment in setting and
                      achieving departmental/company goals{" "}
                    </td>
                    <td className="td-se-question">
                      <select
                        value={op12}
                        onChange={(e) => setOp12(e.target.value)}
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
                </tbody>
              </table>
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label" for="feedback_comments">
              <h5>Supervisor Feedback to Employees:</h5>
            </label>
            <textarea
              className="comments"
              id="comments"
              rows="6"
              placeholder="type something..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="row"></div>
          <button
            type="submit"
            className="btn btn-primary d-block mx-auto mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
