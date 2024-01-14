import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ReadManagerFeedback = () => {
  const [managerfeedback, setManagerFeeback] = useState([]);

  useEffect(() => {
    const fetchAllManagerFeedback = async () => {
      try {
        const res = await axios.get("http://localhost:3001/managerfeedback");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllManagerFeedback();
  }, []);

  return <div>ReadManagerFeedback</div>;
};
