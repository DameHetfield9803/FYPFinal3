import React, { useState } from 'react';
import employeeData from './EmployeeData.json';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';

// React functional component for the Employee page
export default function Employee() {
  // React Router hook for navigation
  const history = useHistory();
  
  // State to hold employee data (initially from JSON file)
  const [jsonData] = useState(employeeData);
  
  // State to hold the filter text
  const [filter, setFilter] = useState('');

  // Logout function that signs out the user and redirects to the home page
  const logout = async () => {
    try {
      await signOut(auth);
      history.push('/');
    } catch (err) {
      console.error(err);
      // Display an error message to the user if needed
    }
  };

  // Function to determine the status based on the 'Adj In' time
  const getStatus = (adjIn) => {
    if (!adjIn || adjIn.trim() === '') {
      return 'Not Present';
    }

    const adjInTime = new Date(`2000-01-01T${adjIn}`);
    const eightAM = new Date(`2000-01-01T08:00:00`);

    return adjInTime > eightAM ? 'Late' : 'Present';
  };

  // Filtering the data based on the input filter text
  const filteredData = jsonData.filter((entry) => {
    const filterLowerCase = filter.toLowerCase();

    if (entry.DEPT.toLowerCase().includes(filterLowerCase)) {
      return true;
    }

    if (entry['Emp Name'].toLowerCase().includes(filterLowerCase)) {
      return true;
    }

    if (entry.BatchNO.toString().includes(filterLowerCase)) {
      return true;
    }

    return false;
  });

  // JSX rendering of the component
  return (
    <div>
      {/* Displaying the Navbar component */}
      <Navbar></Navbar>

      <div className="container mt-3">
        {/* Input field for filtering by Department, Employee Name, or Batch Number */}
        <label htmlFor="filterInput" className="form-label">
          Filter by Department, Employee Name, or Batch Number:
        </label>
        <input
          type="text"
          id="filterInput"
          className="form-control"
          placeholder="Type to filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="container mt-3">
        {/* Displaying a table with employee data */}
        <table className="table table-hover">
          {/* Table header */}
          <thead>
            <tr>
              <th>BatchNO</th>
              <th>DEPT</th>
              <th>Shift Code</th>
              <th>Emp Name</th>
            </tr>
          </thead>

          {/* Table body with filtered data */}
          <tbody>
            {filteredData.map((entry, entryIndex) => (
              <tr key={entryIndex}>
                <td>{entry.BatchNO}</td>
                <td>{entry.DEPT}</td>
                <td>{entry['Shift Code']}</td>
                <td>{entry['Emp Name']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container mt-3">
        {/* Logout button */}
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
