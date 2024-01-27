import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function UpdateEmployee() {
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);

  // Define fetchEmployees function
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getemployee");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees: ", error);
    }
  };

  useEffect(() => {
    // Call fetchEmployees() when component mounts
    fetchEmployees();
  }, []);

  const handleUpdateJobRole = async (staffId, newJobRole) => {
    try {
      await axios.put("http://localhost:3001/updateempjobrole", { job_role: newJobRole, staff_id: staffId });
      // Fetch updated employee list after updating job role
      fetchEmployees();
    } catch (error) {
      console.error("Error updating job role: ", error);
    }
  };

  const handleUpdateDepartment = async (staffId, newDepartmentId) => {
    try {
      await axios.put("http://localhost:3001/updateempdepartment", { department_id: newDepartmentId, staff_id: staffId });
      // Fetch updated employee list after updating department
      fetchEmployees();
    } catch (error) {
      console.error("Error updating department: ", error);
    }
  };

  const handleUpdateReportingTo = async (staffId, newReportingTo) => {
    try {
      await axios.put("http://localhost:3001/updateempreportingto", { reporting_to: newReportingTo, staff_id: staffId });
      // Fetch updated employee list after updating reporting manager
      fetchEmployees();
    } catch (error) {
      console.error("Error updating reporting manager: ", error);
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
      <h1>Update Employee</h1>
      <table className="ml-auto mr-auto ">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Job Role</th>
            <th>Reporting To</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.staff_id}>
              <td>{employee.staff_id}</td>
              <td>{employee.name}</td>
              <td>{employee.name}</td> {/* Display department name instead of ID */}
              <td>{employee.job_role}</td> {/* Display job role */}
              <td>{employee.reporting_to}</td>
              <td>
                <button onClick={() => handleUpdateJobRole(employee.staff_id, "New Job Role")}>Update Job Role</button>
                <button onClick={() => handleUpdateDepartment(employee.staff_id, "New Department ID")}>Update Department</button>
                <button onClick={() => handleUpdateReportingTo(employee.staff_id, "New Reporting To ID")}>Update Reporting To</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
