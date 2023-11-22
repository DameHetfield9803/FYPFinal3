import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function App() {
  const [inputList, setInputList] = useState([
    {
      performance: "",
      excellent: "",
      good: "",
      fair: "",
      poor: "",
      comments: ""
    }
  ]);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (inputList.length > 0) {
      const lastItem = inputList[inputList.length - 1];
      const isLastItemEmpty = Object.values(lastItem).some(value => value === "");
      setIsDisabled(isLastItemEmpty);
    }
  }, [inputList]);

  const handleListAdd = () => {
    setInputList([
      ...inputList,
      {
        performance: "",
        excellent: "",
        good: "",
        fair: "",
        poor: "",
        comments: ""
      }
    ]);
  };

  const handleInputChange = (event, index, columnName) => {
    const { value } = event.target;
    const newInputList = [...inputList];
    newInputList[index][columnName] = value;
    setInputList(newInputList);
  };

  const handleRemoveItem = (index) => {
    if (inputList.length > 1) {
      const newList = [...inputList];
      newList.splice(index, 1);
      setInputList(newList);
    }
  };

  return (
    <div>
      <div className="topnav">
        <Link to="/Home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Attendance">Attendance</Link>
        <Link to="/Accolades">Accolades</Link>
        <Link to="/AppraisalForm">AppraisalForm</Link>

        {/* My Profile link */}
        <Link to="/Profile" className="profile">
          <img src="Assets/Profile-icon.jpg" alt="Profile Icon" width="30px" height="30px" />
          <span>My Profile</span>
        </Link>
      </div>

      <h1>Enter the appraisal performance </h1>

      <div className="row">
        {inputList.map((input, index) => (
          <div key={index} className="col-md-2">
            <div className="form-group">
              <label>Performance Evaluation</label>
              <input
                type="text"
                className="form-control"
                value={input.performance}
                onChange={(event) => handleInputChange(event, index, 'performance')}
              />
            </div>
            <div className="form-group">
              <label>Excellent</label>
              <input
                type="text"
                className="form-control"
                value={input.excellent}
                onChange={(event) => handleInputChange(event, index, 'excellent')}
              />
            </div>
            <div className="form-group">
              <label>Good</label>
              <input
                type="text"
                className="form-control"
                value={input.good}
                onChange={(event) => handleInputChange(event, index, 'good')}
              />
            </div>
            <div className="form-group">
              <label>Fair</label>
              <input
                type="text"
                className="form-control"
                value={input.fair}
                onChange={(event) => handleInputChange(event, index, 'fair')}
              />
            </div>
            <div className="form-group">
              <label>Poor</label>
              <input
                type="text"
                className="form-control"
                value={input.poor}
                onChange={(event) => handleInputChange(event, index, 'poor')}
              />
            </div>
            <div className="form-group">
              <label>Comments</label>
              <input
                type="text"
                className="form-control"
                value={input.comments}
                onChange={(event) => handleInputChange(event, index, 'comments')}
              />
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => handleRemoveItem(index)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary"
        style={btnStyle}
        onClick={handleListAdd}
        disabled={isDisabled}
      >
        Add row
      </button>
    </div>
  );
}

const btnStyle = {
  marginTop: "1rem"
};
