import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


//validating credentials by retrieving from database
export default function Login() {

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const history = useHistory();

    async function loginAction(){
        let credentials= await axios.post("http://localhost:3001/login")
        .then(function(response){
            if(!validateEmail(response.email) === "" && response.email === credentials.email && response.password === credentials.password){
                return console.log("Login successful.\n");

            }
            else{
                return console.log("Login is invalid. Please try entering your credentials again. \n");
            }
        })
    }
    

    return (
        <>
            <div className="container mt-5">
                <img src="/Assets/TSH.jpg" width="310px" height="90px" href="/" alt="TSH-Logo"/>
                <br />
                <h1 className="mb-2">Login</h1>
                <label>Email</label>
                <input className="form-control mb-3" name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" className="form-control mb-3" name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-primary" style={{ marginRight: "10px" }}
                    onClick={loginAction}
                >Submit</button>
                <Link to="/forgetpassword">
                    Forget password
                </Link>
                {errorMsg &&
                    <div className="alert bg-danger text-white mt-3 p-2">
                        <i className="fas fa-triangle-exclamation mx-2"></i>
                        {errorMsg}
                    </div>
                }
            </div >
        </>
    );
}