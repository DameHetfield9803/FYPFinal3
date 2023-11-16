import { useEffect, useState } from "react";

export default function App() {
  const [inputList, setInputList] = useState([
    {
      input: "",
      input_rank: null
    }
  ]);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (inputList.length > 0) {
      inputList[inputList.length - 1].input === ""
        ? setIsDisabled(true)
        : setIsDisabled(false);
    }
  }, [inputList]);

  const handleListAdd = () => {
    setInputList([
      ...inputList,
      {
        input: "",
        input_rank: null
      }
    ]);
  };

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newInputList = [...inputList];
    newInputList[index].input = value;
    newInputList[index].input_rank = index + 1;
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
    <div className="App">
      <h1>Enter the appraisal performance </h1>

      {inputList.length > 0 ? (
        inputList.map((input, index) => (
          <div key={index} className="input-group" style={inputStyles}>
            <input
              type="text"
              className="form-control"
              placeholder={`Input ${index + 1}`}
              value={input.input}
              onChange={(event) => handleInputChange(event, index)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => handleRemoveItem(index)}
              >
                ❌
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No item in the list</p>
      )}
      <button
        className="btn btn-primary"
        style={btnStyle}
        onClick={handleListAdd}
        disabled={isDisabled}
      >
        Add choice
      </button>
    </div>
  );
}

const btnStyle = {
  marginTop: "1rem"
};

const inputStyles = {
  marginTop: "1rem"
};
