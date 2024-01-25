import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Forbidden from "./pages/Forbidden";
import "./style.css";
import NotFound from "./pages/NotFound";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import PeerEvaluation from "./components/PeerEvaluation/PeerEvaluation";
import SelfEvaluation from "./components/SelfEvaluation/SelfEvaluation";
import Attendance from "./components/Attendance/Attendance";
import ManagerFeedback from "./components/ManagerFeedback/ManagerFeedback";
import Accolades from "./components/Accolades/Accolades";
import AppraisalForm from "./components/AppraisalForm/AppraisalForm";
import Profile from "./components/Profile/profilesettings";
import AppraisalItem from "./components/AppraisalItem/AppraisalItem";
import ReportForm from "./components/ReportForm/reporterror";
import EmpTab from "./components/EmployeeTable/Employee";
import UserGuide from "./components/UserGuide/userguides";
import Navbar from "./components/NavBar/NavBar";
import EmployeeDetails from './components/EmployeeTable/EmployeeDetails';
import Home from "./components/Home/Home";
import AttendanceSummary from "./components/Attendance/Attendancesummary";
import EmailAutomate from "./components/Email/EmailAutomate";
import ViewAccolades from "./components/Accolades/ViewAccolades";
import ViewFeedbackList from "./components/ManagerFeedback/ManagerFeedbackList";
import adminHome from "./admin/adminHome";
export default function App() {
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/home">
            <ProtectedRoute component={Home} />
            </Route>
          <Route exact path="/home/:id">
            <Home />
          </Route>

          <Route exact path = "/admin">
            <adminHome />
          </Route>

          <Route exact path="/accolades">
            <ProtectedRoute component={Accolades} />
          </Route>

          <Route exact path="/forgetpassword">
            <ForgetPassword />
          </Route>

          <Route exact path="/appraisalitem">
            <ProtectedRoute component={AppraisalItem} />
          </Route>

          <Route exact path="/peerevaluation">
            <ProtectedRoute component={PeerEvaluation} />
          </Route>

          <Route exact path="/selfevaluation">
            <ProtectedRoute component={SelfEvaluation} />
          </Route>

          <Route exact path="/attendance">
            <Attendance component={Attendance} />
          </Route>

          <Route exact path="/managerfeedback">
            <ProtectedRoute component={ManagerFeedback} />
          </Route>

          <Route exact path="/appraisalform">
            <ProtectedRoute component={AppraisalForm} />
          </Route>

          <Route exact path="/profile">
            <ProtectedRoute component={Profile} />
          </Route>

          <Route exact path="/reportform">
            <ProtectedRoute component={ReportForm} />
          </Route>

          <Route exact path="/employee">
            <ProtectedRoute component={EmpTab} />
          </Route>

          <Route exact path="/Attendancesummary">
            <ProtectedRoute component={AttendanceSummary} />
          </Route>
          {
            <Route exact path="/AttendanceAdd">
              <ProtectedRoute component={AttendanceAdd} />
            </Route>}

          <Route exact path="/employee" component={EmpTab} />
          <Route exact path="/employee/:id" component={EmployeeDetails} />

          <Route exact path="/userguides">
            <ProtectedRoute component={UserGuide} />
          </Route>

          <Route exact path="/Navbar">
            <ProtectedRoute component={Navbar} />
          </Route>

          <Route exact path="/Email">
            <ProtectedRoute component={EmailAutomate} />
          </Route>

          <route exact path="/feedbacklist">
            <ProtectedRoute component={ViewFeedbackList} />
          </route>

          <Route exact path="/viewaccolades">
            <ProtectedRoute component={ViewAccolades} />
          </Route>

          <Route exact path="/forbidden">
            <Forbidden />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}
