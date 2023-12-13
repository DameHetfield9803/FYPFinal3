// AppraisalForm.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AppraisalFormPage1 = ({ onNext }) => {
  const [data, setData] = useState({ question1: "", question2: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Appraisal Form - Page 1</h2>
      <label>Question 1:</label>
      <input type="text" name="question1" value={data.question1} onChange={handleInputChange} />
      <br />
      <label>Question 2:</label>
      <input type="text" name="question2" value={data.question2} onChange={handleInputChange} />
      <br />
      <button onClick={() => onNext(data)}>Next</button>
    </div>
  );
};

const AppraisalFormPage2 = ({ data, onBack, onNext }) => {
  const [additionalData, setAdditionalData] = useState({ question3: "", question4: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Appraisal Form - Page 2</h2>
      <p>Data from Page 1:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <label>Question 3:</label>
      <input type="text" name="question3" value={additionalData.question3} onChange={handleInputChange} />
      <br />
      <label>Question 4:</label>
      <input type="text" name="question4" value={additionalData.question4} onChange={handleInputChange} />
      <br />
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ ...data, ...additionalData })}>Next</button>
    </div>
  );
};

const AppraisalFormPage3 = ({ data, onBack, onSubmit }) => {
  return (
    <div>
      <h2>Appraisal Form - Page 3</h2>
      <p>Data from Previous Pages:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onSubmit(data)}>Submit</button>
    </div>
  );
};

const AppraisalForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

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
      {currentPage === 1 && <AppraisalFormPage1 onNext={handlePageChange} />}
      {currentPage === 2 && <AppraisalFormPage2 data={formData} onBack={handleBack} onNext={handlePageChange} />}
      {currentPage === 3 && <AppraisalFormPage3 data={formData} onBack={handleBack} onSubmit={handleSubmit} />}
    </div>
  );
};

export default AppraisalForm;
