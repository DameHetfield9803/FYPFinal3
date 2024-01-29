import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [errorMsg, setErrorMsg] = useState(""); 
    const history = useHistory(); 

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/login", { email, password });
            const users = response.data;
            if (users.length === 0) {
                setErrorMsg("Invalid email or password."); // Handle error message display
            } else {
                const user = users[0]; // Assuming we only need the first user
                const staff_id = user.staff_id; // Assuming the API response contains 'staff_id'
                history.push(`/home/${staff_id}`);
            }
        } catch (error) {
            console.error("Login failed:", error);
            setErrorMsg("Invalid email or password."); // Handle error message display
        }
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input type="password" className="form-control mb-3" name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn btn-primary" style={{ marginRight: "10px" }}>Submit</button>
                    <Link to="/forgetpassword">Forget password</Link>
                    {errorMsg && (
                        <div className="alert bg-danger text-white mt-3 p-2">
                            <i className="fas fa-triangle-exclamation mx-2"></i>
                            {errorMsg}
                        </div>
                    )}
                </form>
            </div>
        </>
    );
}
