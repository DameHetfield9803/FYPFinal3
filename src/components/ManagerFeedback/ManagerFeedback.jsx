import { useState } from "react";
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
        }
        else {
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
                    <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="80px"/>
                </a>
                <a href="/Attendance">Attendance</a>
                <a href="/Accolades">Accolades</a>
                <a href="/AppraisalForm">AppraisalForm</a>


                {/* My Profile link*/}
                <a href="/Profile" className="profile">
                    <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />

                    <span>My Profile</span>
                </a>

            </div>
            {/*END OF NAVBAR ITEMS */}

            

            <div className="mb-4 small">
                <form name="feedback_form" id="feedback_form" method="post">
                    <div className="App">
                        <div className="container">
                            <h1 className="title mt-3">Manager Feedback</h1>
                            <table className="table table-striped mt-3 ">
                                <tbody>

                                    <tr>
                                        <td className="td-se-question">Your manager is ready to help you.</td>
                                        <td>
                                            <select
                                                onChange={(e) => setOptionOne(e.target.value)}
                                            >
                                                <option value={""}>Choose option</option>
                                                <option value={"SD"}>Strongly Disagree</option>
                                                <option value={"D"}>Disagree</option>
                                                <option value={"N"}>Neutral</option>
                                                <option value={"A"}>Agree</option>
                                                <option value={"SA"}>Strongly Agree</option>
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="td-se-question">Your manager is knowledgable in his/her field of work.</td>
                                        <td className="td-se-question">
                                            <select
                                                onChange={(e) => setOptionTwo(e.target.value)}
                                            >
                                                <option value={""}>Choose option</option>
                                                <option value={"SD"}>Strongly Disagree</option>
                                                <option value={"D"}>Disagree</option>
                                                <option value={"N"}>Neutral</option>
                                                <option value={"A"}>Agree</option>
                                                <option value={"SA"}>Strongly Agree</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td-se-question">Your manager cared for your safety.</td>
                                        <td>
                                            <select
                                                onChange={(e) => setOptionThree(e.target.value)}
                                            >
                                                <option value={""}>Choose option</option>
                                                <option value={"SD"}>Strongly Disagree</option>
                                                <option value={"D"}>Disagree</option>
                                                <option value={"N"}>Neutral</option>
                                                <option value={"A"}>Agree</option>
                                                <option value={"SA"}>Strongly Agree</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td-se-question">Overall i am able to work with this manager.</td>
                                        <td>
                                            <select
                                                onChange={(e) => setOptionFour(e.target.value)}
                                            >
                                                <option value={""}>Choose option</option>
                                                <option value={"SD"}>Strongly Disagree</option>
                                                <option value={"D"}>Disagree</option>
                                                <option value={"N"}>Neutral</option>
                                                <option value={"A"}>Agree</option>
                                                <option value={"SA"}>Strongly Agree</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                            {isSubmitted &&
                                <div className="alert alert-success mt-3">
                                    <strong>Success!</strong>
                                </div>
                            }

                            {isError &&
                                <div className="alert alert-danger mt-3">
                                    <strong>Error! </strong>
                                    Please complete all the fields before submitting.
                                </div>
                            }

                        </div>
                    </div>
                    
                    <div className="commentarea mb-4 text-align:center;">
                        <label className="form-label mb-3 ml-4" for="feedback_comments">Other Comments:</label>
                        <br/>
                        <div className="formarea text-align:cemter;">
                        <textarea className="form-control" required rows="6" name="comments" id="feedback_comments"></textarea>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                    <button type="submit" className="btn btn-primary d-block mx-auto mt-5">Submit</button>
                </form>
                
            </div>


        </div>
    )
}