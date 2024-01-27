import { Link } from "react-router-dom";
import "./HRHomepage.css";

export default function HRHomepage() {
  return (
    <>
      <h1>Human Resource Dashboard</h1>
      <div className="HR-container">
        <Link to="/Attendance">Attendance</Link> <br></br>
        <Link to="/viewAccolades">Accolades</Link>
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
        <Link href="/userguides">UserGuide</Link>
        <br></br>
      </div>
    </>
  );
}
