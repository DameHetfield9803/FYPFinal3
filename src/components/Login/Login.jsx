import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


//validating credentials by retrieving from database
export default function Login() {

    const [email, setEmail] = useState(""); // set and submit email

    const [password, setPassword] = useState(""); //set and submit password

    const [errorMsg, setErrorMsg] = useState(""); // set and show errormsg

    const history = useHistory(); // based on login, if successful

    async function handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:3001/login", {email, password})
        .then(res => console.log(res))
        history.push("/home")
    }

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
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
                    onClick={handleSubmit}
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
                </form>
            </div >
        </>
    );
}