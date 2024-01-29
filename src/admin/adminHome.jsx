import "./adminHome.css";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect , useState } from "react";
export default function AdminHome(){ 
    const { id } = useParams();
    const [job_role, setJob_Role] = useState("");
    useEffect(() => {
      async function fetchJob_Role() {
        try {
          const response = await axios.get(`http://localhost:3001/getempjobrole/${id}`);
          setJob_Role(response.data.job_role);
        } catch (error) {
          console.error("Error fetching job role:", error);
        }
      }
      fetchJob_Role();
    }, [id]);
    return(
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
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Appraisal Item section
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href={`/adminhome/${id}/createappraisalitem`}>Create Appraisal Item</a>
                            <a className="dropdown-item" href={`/adminhome/${id}/viewappraisalitem`}>View Employees</a>
                            <a className="dropdown-item" href={`/adminhome/${id}/updateappraisalitem`}>Update Employee</a>
                            <a className="dropdown-item" href={`/adminhome/${id}/deleteappraisalitem`}>Delete Employee</a>
                            <a className="dropdown-item" href="/">Logout</a>
                            </div>
                      </li>
                  </ul>
              </div>
          </nav>
          <h1><strong>System Admins Page</strong></h1>
        </div>
    );
}