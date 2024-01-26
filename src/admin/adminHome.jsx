import { Link } from "react-router-dom";
import "./adminHome.css";
export default function adminHome(){ 
    return(
        <div className="admin-container">
            <h1><strong>System Admin Page</strong></h1>
            <Link to="/appraisalitem">Appraisal Item</Link> <br/>
            <Link to="/Attendance">Attendance</Link> <br/>
            <Link to="/Accolades">Accolades</Link>
            <br/>
            <Link to="/AppraisalForm">AppraisalForm</Link>
            <br/>
            <Link to="/AppraisalItem">AppraisalItem</Link>
            <br/>
            <Link to="/Employee">Employee</Link>
            <br/>
            <Link to="/PeerEvaluation">PeerEvaluation</Link>
            <br/>
            <Link to="/SelfEvaluation">SelfEvaluation</Link>
            <br/>
            <Link to="/ReportForm">ReportForm</Link>
            <br/>
            <Link to="/ManagerFeedback">ManagerFeedback</Link>
            <br/>
            <Link to="/userguides">UserGuide</Link>
            <br/>
        </div>
    );
}