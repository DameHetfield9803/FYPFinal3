import Navbar from "../NavBar/NavBar";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AppraisalForm.css"

const AppraisalFormPage1 = ({ onNext, handleChange, data }) => {
  return (
    
    <div>
      <Navbar></Navbar>
      <h1>Appraisal Form - Page 1</h1>
      <label>Name of Appraisee:</label>
      <input type="text" name="nameOfAppraisee" value={data.nameOfAppraisee} onChange={handleChange} />
      <br />
      <label>Appraisee’s Emp No:</label>
      <input type="text" name="appraiseeEmpNo" value={data.appraiseeEmpNo} onChange={handleChange} />
      <br />
      <label>Designation:</label>
      <input type="text" name="designation" value={data.designation} onChange={handleChange} />
      <br />
      <label>Job Grade:</label>
      <input type="text" name="jobGrade" value={data.jobGrade} onChange={handleChange} />
      <br />
      <label>Department:</label>
      <input type="text" name="department" value={data.department} onChange={handleChange} />
      <br />
      <label>Date Joined:</label>
      <input type="text" name="dateJoined" value={data.dateJoined} onChange={handleChange} />
      <br />
      <label>Appraisal Review Period:</label>
      <input type="text" name="appraisalReviewPeriod" value={data.appraisalReviewPeriod} onChange={handleChange} />
      <br />
      <label>Performance Rating:</label>
      <input type="text" name="performanceRating" value={data.performanceRating} onChange={handleChange} />
      <br />
      <label>Appraisal Conducted By:</label>
      <input type="text" name="appraisalConductedBy" value={data.appraisalConductedBy} onChange={handleChange} />
      <br />
      <label>Designation:</label>
      <input type="text" name="conductedByDesignation" value={data.conductedByDesignation} onChange={handleChange} />
      <br />
      <button onClick={() => onNext(data)}>Next</button>
    </div>
  );
};

const AppraisalFormPage2 = ({ onNext, onBack, handleChange, data }) => {
  return (
    <div>
      <h2>Appraisal Form - Page 2</h2>
      <p>Data from Page 1 previous page:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <label>Peer Evaluation:</label>
      <input type="text" name="question3" value={data.question3} onChange={handleChange} />
      <br />
      <label>Self Evaluation:</label>
      <input type="text" name="question4" value={data.question4} onChange={handleChange} />
      <br />
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext(data)}>Next</button>
    </div>
  );
};

const AppraisalFormPage3 = ({ onNext, onBack, handleChange, data }) => {
  return (
    <div>
      <h2>Appraisal Form - Page 3</h2>
      <p>Data from Previous Pages:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <label>Question 5:</label>
      <input type="text" name="question5" value={data.question5} onChange={handleChange} />
      <br />
      <label>Question 6:</label>
      <input type="text" name="question6" value={data.question6} onChange={handleChange} />
      <br />
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext(data)}>Next</button>
    </div>
  );
};

const AppraisalFormPage4 = ({ onNext, onBack, handleChange, data }) => {
  return (
    <div>
      <h2>Appraisal Form - Page 4</h2>
      <p>Data from Previous Pages:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <label>Question 7:</label>
      <input type="text" name="question7" value={data.question7} onChange={handleChange} />
      <br />
      <label>Question 8:</label>
      <input type="text" name="question8" value={data.question8} onChange={handleChange} />
      <br />
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext(data)}>Next</button>
    </div>
  );
};

const AppraisalFormPage5 = ({ onSubmit, onBack, handleChange, data }) => {
  return (
    <div>
      <h2>Appraisal Form - Page 5</h2>
      <p>Data from Previous Pages:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <label>Final Question:</label>
      <input type="text" name="finalQuestion" value={data.finalQuestion} onChange={handleChange} />
      <br />
      <button onClick={onBack}>Back</button>
      <button onClick={() => onSubmit(data)}>Submit</button>
    </div>
  );
};

const AppraisalForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    finalQuestion: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePageChange = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => setCurrentPage((prevPage) => prevPage - 1);

  const handleSubmit = (data) => {
    // Handle the final submission (e.g., send data to the server)
    console.log("Final Appraisal Form Data:", data);
    // Redirect or perform other actions after submission
    history.push("/dashboard");
  };

  return (
    <div>
      {currentPage === 1 && (
        <AppraisalFormPage1 onNext={handlePageChange} handleChange={handleChange} data={formData} />
      )}
      {currentPage === 2 && (
        <AppraisalFormPage2
          data={formData}
          onBack={handleBack}
          onNext={handlePageChange}
          handleChange={handleChange}
        />
      )}
      {currentPage === 3 && (
        <AppraisalFormPage3
          data={formData}
          onBack={handleBack}
          onNext={handlePageChange}
          handleChange={handleChange}
        />
      )}
      {currentPage === 4 && (
        <AppraisalFormPage4
          data={formData}
          onBack={handleBack}
          onNext={handlePageChange}
          handleChange={handleChange}
        />
      )}
      {currentPage === 5 && (
        <AppraisalFormPage5 onSubmit={handleSubmit} onBack={handleBack} handleChange={handleChange} data={formData} />
      )}
    </div>
  );
};

export default AppraisalForm;
