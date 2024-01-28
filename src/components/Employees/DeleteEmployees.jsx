import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
export default function DeleteEmployees() {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getemployee");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees: ", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (staffId) => {
    try {
      // Prompt for confirmation before deletion
      const confirmed = window.confirm("Are you sure you want to delete this employee?");
      if (!confirmed) return; // If not confirmed, do nothing

      await axios.delete("http://localhost:3001/deleteemployee", { data: { staff_id: staffId } });
      
      // Redirect to /adminhome/:id on successful deletion
      history.push(`/adminhome/${id}/viewemployee`);
    } catch (error) {
      console.error("Error deleting employee: ", error);
      // Display error message if deletion fails
      alert("Failed to delete employee. Please try again later.");
    }
  };

  return (
    <div className="container text-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href={`/adminhome/${id}`}>Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Employee section
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href={`/adminhome/${id}/createemployee`}>Create Employee</a>
                            <a className="dropdown-item" href={`/adminhome/${id}/viewemployee`}>View Employees</a>
                            <a className="dropdown-item" href={`/adminhome/${id}/updateemployee`}>Update Employee</a>
                            <a className="dropdown-item" href={`/adminhome/${id}/deleteemployee`}>Delete Employee</a>
                            <a className="dropdown-item" href="/">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
      <h1>Delete Employee</h1>
      <br/>
      <table className="ml-auto mr-auto">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.staff_id}>
              <td>{employee.staff_id}</td>
              <td>{employee.staff_name}</td>
              <td>
                <button onClick={() => handleDelete(employee.staff_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
