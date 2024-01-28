import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
export default function ViewEmployees() {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    // Fetch employees data from the server
    async function fetchEmployees() {
      try {
        const response = await axios.get("http://localhost:3001/getemployee");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees: ", error);
      }
    }

    fetchEmployees();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      // Redirect to DeleteEmployee component with the employeeId as parameter
      history.push(`/adminhome/${id}/deleteemployee`);
    } catch (error) {
      console.error("Error redirecting to DeleteEmployee component: ", error);
    }
  };

  const handleUpdate = (employeeId) => {
    try {
      // Redirect to UpdateEmployee component with the employeeId as parameter
      history.push(`/adminhome/${id}/updateemployee`);
    } catch (error) {
      console.error("Error redirecting to UpdateEmployee component: ", error);
    }
  };

  return (
    <div className="container text-center">
      <h1><strong>View All Employees</strong></h1>
      <br/>
      <div>
        <table className="ml-auto mr-auto">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Reporting to</th>
              <th>Email</th>
              <th>Department</th>
              <th className="mr-4">Job Role </th>
              <th className="ml-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.staff_id}>
                <td>{employee.staff_name}</td>
                <td>{employee.reporting_to}</td>
                <td>{employee.email}</td>
                <td>{employee.department_id}</td>
                <td className="mr-4">{employee.job_role} </td>
                <td className="ml-4">
                  <button
                    onClick={() => handleUpdate(employee.staff_id)}
                    style={{ fontSize: "12px", padding: "5px 10px" }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(employee.staff_id)}
                    style={{ fontSize: "12px", padding: "5px 10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
