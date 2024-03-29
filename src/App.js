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
import AppraisalForm from "./components/AppraisalForm/AppraisalForm";
import Profile from "./components/Profile/profilesettings";
import AppraisalItem from "./components/AppraisalItem/CreateAppraisalItem";
import ReportForm from "./components/ReportForm/reporterror";
import EmpTab from "./components/EmployeeTable/Employee";
import UserGuide from "./components/UserGuide/userguides";
import Navbar from "./components/NavBar/NavBar";
import EmployeeDetails from "./components/EmployeeTable/EmployeeDetails";
import Home from "./components/Home/Home";
import AttendanceSummary from "./components/Attendance/Attendancesummary";
import EmailAutomate from "./components/Email/EmailAutomate";
import ViewAccolades from "./components/Accolades/ViewAccolades";
import ViewFeedbackList from "./components/ManagerFeedback/ManagerFeedbackList";
import ManagerFeedbackSuccess from "./components/ManagerFeedback/ManagerFeedbackSuccess";
import PeerFeedbackList from "./components/PeerEvaluation/PeerEvalList";
import AddAccolade from "./components/Accolades/AddAccolade";
import EmployeeNavBar from "./components/NavBar/EmployeeNavBar";
import AccoladeSuccess from "./components/Accolades/AccoladeSuccess";
import PeerEvaluationSuccess from "./components/PeerEvaluation/PeerEvaluationSuccess";
import SelfEvaluationSuccess from "./components/SelfEvaluation/SelfEvaluationSuccess";
import SelfEvalList from "./components/SelfEvaluation/SelfEvalList";
import ManagerNavbar from "./components/NavBar/ManagerNavBar";
import AdminHome from "./admin/adminHome";
import CreateEmployee from "../src/components/Employees/CreateEmployee";
import ViewEmployee from "./components/Employees/ViewEmployees";
import UpdateEmployee from "./components/Employees/UpdateEmployee";
import DeleteEmployee from "./components/Employees/DeleteEmployees";
import CreateAppraisalItem from "./components/AppraisalItem/CreateAppraisalItem";
import ViewAppraisalItem from "./components/AppraisalItem/ViewAppraisalItem";
import UpdateAppraisalItem from "./components/AppraisalItem/UpdateAppraisalItem";
import DeleteAppraisalItem from "./components/AppraisalItem/DeleteAppraisalIem";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/home/:id">
            <Home />
          </Route>

          <Route exact path="/adminhome/:id">
            <AdminHome />
          </Route>

          <Route exact path="/adminhome/:id/createemployee">
            <CreateEmployee />
          </Route>

          <Route exact path="/adminhome/:id/viewemployee">
            <ViewEmployee />
          </Route>

          <Route exact path="/adminhome/:id/updateemployee">
            <UpdateEmployee/>
          </Route>

          <Route exact path="/adminhome/:id/deleteemployee">
            <DeleteEmployee/>
          </Route>

          <Route exact path="/hrhome/:id/viewemployee">
            <ViewEmployee />
          </Route>

          <Route exact path="/hrhome/:id/createemployee">
            <CreateEmployee />
          </Route>

          <Route exact path="/hrhome/:id/updateemployee">
            <UpdateEmployee />
          </Route>

          <Route exact path="/adminhome/:id/deleteemployee">
            <DeleteEmployee />
          </Route>

          <Route exact path="/hrhome/:id/deleteemployee">
            <DeleteEmployee />
          </Route>

          <Route exact path="/adminhome/:id/createappraisalitem">
            <CreateAppraisalItem />
          </Route>

          <Route exact path="/adminhome/:id/viewappraisalitem">
            <ViewAppraisalItem />
          </Route>

          <Route exact path="/adminhome/:id/updateappraisalitem">
            <UpdateAppraisalItem />
          </Route>

          <Route exact path="/adminhome/:id/deleteappraisalitem">
            <DeleteAppraisalItem />
          </Route>

          <Route exact path="/viewaccolades">
            <ViewAccolades />
          </Route>

          <Route exact path="/addaccolades">
            <AddAccolade />
          </Route>

          <Route exact path="/AccoladeSuccess">
            <AccoladeSuccess />
          </Route>

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
            <ViewFeedbackList />
          </Route>

          <Route exact path="/managersuccess">
            <ManagerFeedbackSuccess />
          </Route>

          <Route exact path="/peerevaluationlist">
            <PeerFeedbackList />
          </Route>

          <Route exact path="/peerevaluationsuccess">
            <PeerEvaluationSuccess />
          </Route>

          <Route exact path="/selfevaluationsuccess">
            <SelfEvaluationSuccess />
          </Route>

          <Route exact path="/selfevaluationlist">
            <SelfEvalList />
          </Route>

          <Route exact path="/Navbar">
            <Navbar />
          </Route>

          <Route exact path="/EmpNavBar">
            <EmployeeNavBar />
          </Route>

          <Route exact path="/managernavbar">
            <ManagerNavbar />
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
