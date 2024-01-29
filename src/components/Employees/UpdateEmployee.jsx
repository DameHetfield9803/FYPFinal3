import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateEmployee() {
  const [employees, setEmployees] = useState([]);
  const [jobRoles, setJobRoles] = useState([]); // Change state variable name to jobRoles
  const [selectedJobRole, setSelectedJobRole] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedReportingTo, setSelectedReportingTo] = useState("");

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

  const fetchJobRoles = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getjobroles");
      setJobRoles(response.data); // Set jobRoles state with fetched data
    } catch (error) {
      console.error("Error fetching job roles: ", error);
    }
  };

  useEffect(() => {
    fetchJobRoles();
  }, []);

  const handleUpdateJobRole = async (staffId, newJobRole) => {
    try {
      await axios.put(`http://localhost:3001/updateempjobrole`, {
        job_role: newJobRole,
        staff_id: staffId
      });
      alert("Job role updated successfully.");
    } catch (error) {
      console.error("Error updating job role: ", error);
      alert("Failed to update job role.");
    }
  };

  const handleUpdateDepartment = async (staffId, newDepartmentId) => {
    try {
      await axios.put(`http://localhost:3001/updateempdepartment`, {
        department_id: newDepartmentId,
        staff_id: staffId
      });
      alert("Department updated successfully.");
    } catch (error) {
      console.error("Error updating department: ", error);
      alert("Failed to update department.");
    }
  };

  const handleReportingTo = async (staffId, newReportingTo) => {
    try {
      await axios.put(`http://localhost:3001/updateempreportingto`, {
        reporting_to: newReportingTo,
        staff_id: staffId
      });
      alert("Reporting to updated successfully.");
    } catch (error) {
      console.error("Error updating reporting to: ", error);
      alert("Failed to update reporting to.");
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
              <td>{employee.staff_name}</td>
              <td>{employee.department_id}</td>
              <td>{employee.job_role}</td>
              <td>{employee.reporting_to}</td>
              <td>
                <select onChange={(e) => setSelectedJobRole(e.target.value)}>
                  {/* Use jobRoles state for job role dropdown */}
                  {jobRoles.map((role) => (
                    <option key={role.job_role_id} value={role.job_role}>
                      {role.job_role}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleUpdateJobRole(employee.staff_id, selectedJobRole)}>
                  Update Job Role
                </button>
              </td>
              <td>
                <select onChange={(e) => setSelectedDepartment(e.target.value)}>
                  {employees.map((emp) => (
                    <option key={emp.staff_id} value={emp.department_id}>
                      {emp.department_id}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleUpdateDepartment(employee.staff_id, selectedDepartment)}>
                  Update Department
                </button>
              </td>
              <td>
                <select onChange={(e) => setSelectedReportingTo(e.target.value)}>
                  {employees.map((emp) => (
                    <option key={emp.staff_id} value={emp.staff_id}>
                      {emp.staff_name}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleReportingTo(employee.reporting_to, employee.staff_id)}>
                  Update Reporting To
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
