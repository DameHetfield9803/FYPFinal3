import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Attendance.css"; // Import the CSS for your Attendance component

export default function Attendance() {
  const history = useHistory();

  const logout = async () => {
    try {
      await signOut(auth);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const noOfWeeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];

  const myEmployees = [
    "Alan", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hank", "Ivy",
    "Jack", "Kelly", "Leo", "Mia", "Nina", "Oscar", "Pam", "Quinn", "Randy",
    "Sara", "Tom", "Uma", "Victor", "Wendy", "Xander", "Yara", "Zoe"
  ];

  return (
    <div>
      {/* Navbar with logo and links */}
      <div className="topnav">
        <Link to="/home" className="logo-link">
          <img src="Assets/TSH.jpg" alt="Logo" width="310px" height="90px" />
        </Link>

        
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/accolades">Accolades</Link>
      </div>

      <div className="container mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Supervisor</th>
              <th>Email</th>
              {noOfWeeks.map((week, index) => (
                <th key={index}>{week}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {myEmployees.map((employee, empIndex) => (
              <tr key={empIndex}>
                <td>{employee}</td>
                <td>Doe</td>
                <td>{employee}@example.com</td>
                {noOfWeeks.map((week, weekIndex) => (
                  <td key={weekIndex}>
                    <div className="dropdown">
                      <div
                        className="weekly-eval-box alert-success"
                        type="button"
                        data-toggle="dropdown"
                      >
                        A
                      </div>
                      <div className="dropdown-menu p-2">
                        <p className="ml-2 mt-0 mb-1 liner">
                          <b>Supervisor's Feedback</b>
                        </p>
                        <p className="ml-2">
                          I believe you can do better by coming to work on time
                        </p>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}