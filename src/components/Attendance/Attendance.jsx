import { useState } from "react";
import "./style.css";

export default function Attendance() {

  const [noOfWeeks, setNoOfWeeks] = useState(["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"]);

  const [myEmployees, setMyEmployees] = useState([
    "Alan", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hank", "Ivy",
    "Jack", "Kelly", "Leo", "Mia", "Nina", "Oscar", "Pam", "Quinn", "Randy",
    "Sara", "Tom", "Uma", "Victor", "Wendy", "Xander", "Yara", "Zoe"
  ]);

  return (
    <div className="container mt-5">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Supervisor</th>
            <th>Email</th>
            {noOfWeeks.map((week) => (
              <th>{week}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {myEmployees.map((employee) => (
            <tr>
              <td>{employee}</td>
              <td>Doe</td>
              <td>{employee}@example.com</td>
              {noOfWeeks.map((week) => (
                <td>

                  <div className="dropdown">
                    <div className="weekly-eval-box alert-success"
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
  );
}