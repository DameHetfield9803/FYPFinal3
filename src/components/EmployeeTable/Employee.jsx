import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import employeeData from './EmployeeData.json';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';

export default function Employee() {
  const history = useHistory();
  const [jsonData] = useState(employeeData);
  const [filter, setFilter] = useState('');

  // Function to handle user logout
  const logout = async () => {
    try {
      await signOut(auth);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  // Filter the employee data based on the filter input
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

  return (
    <div>
      {/* Render the custom Navbar component. */}
      <Navbar />

      <div className="container mt-3">
        {/* Input for filtering employees */}
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
        {/* Table displaying employee data */}
        <table className="table table-hover">
          <thead>
            <tr>
              <th>BatchNO</th>
              <th>DEPT</th>
              <th>Shift Code</th>
              <th>Emp Name</th>
              <th>Actions</th> {/* New column for actions */}
            </tr>
          </thead>

          <tbody>
            {filteredData.map((entry, entryIndex) => (
              <tr key={entryIndex}>
                <td>{entry.BatchNO}</td>
                <td>{entry.DEPT}</td>
                <td>{entry['Shift Code']}</td>
                <td>
                  {/* Link to the employee details page */}
                  <Link to={`/Employee/${entryIndex}`}>{entry['Emp Name']}</Link>
                </td>
                <td>
                  {/* You can add edit/view buttons here if needed */}
                  <Link to={`/Employee/${entryIndex}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container mt-3">
        {/* Button for user logout */}
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
