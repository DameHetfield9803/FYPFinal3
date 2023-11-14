import { BrowserRouter as Router, Route, Switch } from  "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login/Login";
import Forbidden from "./pages/Forbidden";
import "./style.css";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>


          <Route exact path="/">
            <Login />
          </Route>

          
          <Route exact path="/dashboard">
            <ProtectedRoute component={Dashboard} />
          </Route>

          <Route exact path="/forget-password">
            <ForgetPassword />
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

export default App;
