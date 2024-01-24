// ViewAccolades.js
import React from "react";

const ViewAccolades = ({ accolades }) => {
  return (
    <div>
      <h2>View Accolades</h2>
      {accolades && accolades.length > 0 ? (
        <ul>
          {accolades.map((accolade, index) => (
            <li key={index}>
              Staff ID: {accolade.staffId}, Accolade Title: {accolade.accoladeTitle}, Completion Date: {accolade.completionDate}, Achievement Level: {accolade.achievementLevel}
            </li>
          ))}
        </ul>
      ) : (
        <p>No accolades to display</p>
      )}
    </div>
  );
};

export default ViewAccolades;
