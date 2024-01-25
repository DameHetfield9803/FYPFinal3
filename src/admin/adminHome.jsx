import { Link } from "react-router-dom";
import "./adminHome.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function adminHome(){
    return(
        
        <div className="admin-container">
            <h1><strong>System Admin Page</strong></h1>
            <Link to="/appraisalitem">Appraisal Item</Link>
            <Link to="/Attendance">Attendance</Link> <br></br>
            <Link to="/Accolades">Accolades</Link>
            <br></br>
            <Link to="/AppraisalForm">AppraisalForm</Link>
            <br></br>
            <Link to="/AppraisalItem">AppraisalItem</Link>
            <br></br>
            <Link to="/Employee">Employee</Link>
            <br></br>
            <Link to="/PeerEvaluation">PeerEvaluation</Link>
            <br></br>
            <Link to="/SelfEvaluation">SelfEvaluation</Link>
            <br></br>
            <Link to="/ReportForm">ReportForm</Link>
            <br></br>
            <Link to="/ManagerFeedback">ManagerFeedback</Link>
            <br></br>
            <Link to="/userguides">UserGuide</Link>
            <br></br>
        </div>
    );
}