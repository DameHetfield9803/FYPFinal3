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
//import AddAccolade from "./components/Accolades/AddAccolade";
import ViewFeedbackList from "./components/ManagerFeedback/ManagerFeedbackList";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/Home">
            <Home />
          </Route>

          <Route exact path="/accolades">
            <Accolades />
          </Route>

          <Route exact path="/viewaccolades">
            <ViewAccolades />
          </Route>

          {/*<Route exact path="/addaccolades">
            <AddAccolade />
          </Route>*/}

          <Route exact path="/forgetpassword">
            <ForgetPassword />
          </Route>

          <Route exact path="/appraisalitem">
            <AppraisalItem />
          </Route>

          <Route exact path="/peerevaluation">
            <PeerEvaluation />
          </Route>

          <Route exact path="/selfevaluation">
            <SelfEvaluation />
          </Route>

          <Route exact path="/attendance">
            <Attendance />
          </Route>

          <Route exact path="/managerfeedback">
            <ManagerFeedback />
          </Route>

          <Route exact path="/appraisalform">
            <AppraisalForm />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/reportform">
            <ReportForm />
          </Route>

          <Route exact path="/Attendancesummary">
            <AttendanceSummary />
          </Route>

          <Route exact path="/employee" component={EmpTab} />
          <Route exact path="/employee/:id" component={EmployeeDetails} />

          <Route exact path="/userguides">
            <UserGuide />
          </Route>

          <Route exact path="/Email">
            <EmailAutomate />
          </Route>

          <Route exact path="/feedbacklist">
              <ViewFeedbackList/>
          </Route>

          <Route exact path="/Navbar">
            <Navbar />
          </Route>

          <Route exact path="/forbidden">
            <Forbidden />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

