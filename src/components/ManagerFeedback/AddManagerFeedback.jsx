import React from "react";

const Add = () => {
  const [input, setInput] = useState({
    date: "",
    feedbackText: "",
  });
  return (
    <div className="form">
      <h1>Add new manager feedback</h1>
      <input></input>
    </div>
  );
};

export default Add;
