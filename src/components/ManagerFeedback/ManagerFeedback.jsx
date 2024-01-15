//Add manager feedback 
import { useState } from "react";
import axios from 'axios';
import "./ManagerFeedback.css";

export default function ManagerFeedback() {
  function submitForm() {
    //setIsSubmitted(true);

    // if all options are chosen and valid
    if (
      optionOne !== "" &&
      optionTwo !== "" &&
      optionThree !== "" &&
      optionFour !== ""
    ) {
      setIsError(false);
      setIsSubmitted(true);
    } else {
      // if some options are not chosen
      setIsError(true);
      setIsSubmitted(false);
    }
  }

  // gets and sets the fields,
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");

  const [isError, setIsError] = useState(false);
  return (
    <div>
      {/* NAVBAR ITEMS */}
      <div className="topnav">
        <a href="/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="80px" />
        </a>
        <a href="/Attendance">Attendance</a>
        <a href="/Accolades">Accolades</a>
        <a href="/AppraisalForm">AppraisalForm</a>

        {/* My Profile link*/}
        <a href="/Profile" className="profile">
          <img
            src="Assets/Profile-icon.jpg"
            alt="Profile Icon"
            width="30px"
            height="30px"
          />

          <span>My Profile</span>
        </a>
      </div>
      {/*END OF NAVBAR ITEMS */}

      <div className="mb-4 small">
        <form
          name="feedback_form"
          id="feedback_form"
          method="get"
          action="/submitManagerFeedback"
        >
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
                      <select onChange={(e) => setOptionOne(e.target.value)}>
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
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
                        <option value={1}>1</option>
                        <option value={"D"}>2</option>
                        <option value={"N"}>3</option>
                        <option value={"A"}>4</option>
                        <option value={"SA"}>5</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td className="td-se-question">
                      <b>Ability to meet deadlines </b> eg: Consistency to meet
                      the deadline
                    </td>
                    <td className="td-se-question">
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
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
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
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
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
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
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
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
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
                        <option value={1}>1</option>
                        <option value={"D"}>2</option>
                        <option value={"N"}>3</option>
                        <option value={"A"}>4</option>
                        <option value={"SA"}>5</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-se-question">
                      <b>Decision-Making</b> eg: Able to make sound and decisive
                      decision
                    </td>
                    <td className="td-se-question">
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
                        <option value={1}>1</option>
                        <option value={"D"}>2</option>
                        <option value={"N"}>3</option>
                        <option value={"A"}>4</option>
                        <option value={"SA"}>5</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-se-question">
                      <b>Reaction under Pressure</b> eg: Continue to be stable
                      and productive under pressure{" "}
                    </td>
                    <td className="td-se-question">
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
                        <option value={1}>1</option>
                        <option value={"D"}>2</option>
                        <option value={"N"}>3</option>
                        <option value={"A"}>4</option>
                        <option value={"SA"}>5</option>
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
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
                        <option value={1}>1</option>
                        <option value={"D"}>2</option>
                        <option value={"N"}>3</option>
                        <option value={"A"}>4</option>
                        <option value={"SA"}>5</option>
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
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
                        <option value={1}>1</option>
                        <option value={"D"}>2</option>
                        <option value={"N"}>3</option>
                        <option value={"A"}>4</option>
                        <option value={"SA"}>5</option>
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
                      <select onChange={(e) => setOptionTwo(e.target.value)}>
                        <option value={""}>Choose option</option>
                        <option value={1}>1</option>
                        <option value={"D"}>2</option>
                        <option value={"N"}>3</option>
                        <option value={"A"}>4</option>
                        <option value={"SA"}>5</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>

              {isSubmitted && (
                <div className="alert alert-success mt-3">
                  <strong>Success!</strong>
                </div>
              )}

              {isError && (
                <div className="alert alert-danger mt-3">
                  <strong>Error! </strong>
                  Please complete all the fields before submitting.
                </div>
              )}
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label" for="feedback_comments">
              <h5>Supervisor Feedback to Employees:</h5>
            </label>
            <textarea
              class="form-control"
              required
              rows="6"
              name="comments"
              id="feedback_comments"
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
    </div>
  );
}

