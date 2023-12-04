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

  const columns = ["performance", "excellent", "good", "fair", "poor", "comments"];

  return (
    <div>
      <div className="topnav">
        {/* ... (unchanged) */}
      </div>
      <h1>Enter the appraisal performance </h1>

      <table className="table">
        <thead>
          <tr>
            {columns.map((columnName, colIndex) => (
              <th key={colIndex}>{columnName.charAt(0).toUpperCase() + columnName.slice(1)}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inputList.map((input, index) => (
            <tr key={index}>
              {columns.map((columnName, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    className="form-control"
                    value={input[columnName]}
                    onChange={(event) => handleInputChange(event, index, columnName)}
                  />
                </td>
              ))}
              <td>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
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
