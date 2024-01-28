import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom"; // Import useHistory and useParams hooks

export default function UpdateEmployee() {
  const [employees, setEmployees] = useState([]);
  const history = useHistory(); // Initialize useHistory
  const { id } = useParams(); // Get id from route parameters

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
      await axios.put(`http://localhost:3001/updateempjobrole`, {
        job_role: newJobRole,
        staff_id: staffId
      });
      // Redirect or update state after successful update
    } catch (error) {
      console.error("Error updating job role: ", error);
    }
  };

  const handleUpdateDepartment = async (staffId, newDepartmentId) => {
    try {
      // Redirect to UpdateEmployeeDepartment component without changing any values
      history.push(`/adminhome/${id}/updateemployee/updateemployeedepartment`);
    } catch (error) {
      console.error("Error updating department: ", error);
    }
  };

  const handleReportingTo = async (staffId) => {
    try {
      // Redirect to UpdateEmployeeReportingTo component without changing any values
      history.push(`/adminhome/${id}/updateemployee/updateemployeereportingto`);
    } catch (error) {
      console.error("Error updating reporting to: ", error);
    }
  };

  // Empty function to handle button click without triggering functionality
  const handleEmptyClick = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedStaffId = employees.find(emp => emp.staff_id === id)?.staff_id;
      if (!selectedStaffId) {
        console.error("Employee not found.");
        return;
      }
      // Perform any necessary actions on form submission
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="container text-center">
      <h1>Update Employee</h1>
      <table className="ml-auto mr-auto">
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
                <button onClick={() => handleReportingTo(employee.staff_id)}>Update Reporting To</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
