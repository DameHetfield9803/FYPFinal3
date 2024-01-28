import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateEmployee() {
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
