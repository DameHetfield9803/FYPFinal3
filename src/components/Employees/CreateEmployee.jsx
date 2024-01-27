// import axios from "axios";
// import { useEffect , useState } from "react";
// import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
// export default function CreateEmployee(){
//     const { id } = useParams();
//     let history = useHistory();
//     const[department_name, setdepartment_name] = useState("");
//     useEffect(() => {
//         async function getdepartment() {
//             axios.get("http://localhost:3001/getdepartment").then((response) =>{
//                 setdepartment_name(response.data);
//             })
//         }
//         getdepartment();
//         }, [department_name]);
//     const [staff_name, setstaff_name] = useState("");
//     useEffect(() => {
//     async function getstaffname(){
//         axios.get("http://localhost:3001/getstaffname").then((response) => {
//                 setstaff_name(response.data);
//             })   
//         }
//         getstaffname();
//     }, [staff_name])

//     const[job_role, setjobrole] = useState("");
//     useEffect(()=> {
//         async function getjobrole(){
//             axios.get("http://localhost:3001/getjobroles").then((response) =>{ 
//                 setjobrole(response.data);
//             })
//         }
//         getjobrole();
//     }, [job_role])
//     function HandSub(){
//         const handleSubmit = (event) =>{
//             event.preventDefault();
//             history.push(`/adminhome/${id}`);
//         }
//     }
//     return(
//         <div className="container">
//             <form method="post" action="http://localhost:3001/createemployee">
//                 <h1>Employee creation</h1>
//                 <br/>
//                 <label htmlFor="staff_name">Staff Name: </label>
//                 <input type="text" id="staff_name" name="staff_name"/>
//                 <br/>
//                 <label htmlFor="username">Username: </label>
//                 <input type="text" id="username" name="username"/>
//                 <br/>
//                 <label htmlFor="password">Password: </label>
//                 <input type="password" id="password" name="password"/>
//                 <br/>
//                 <label htmlFor="reporting_to">Reporting To:</label>
//                 <select id="reporting_to" name="reporting_to">
//                         {staff_name ? staff_name.map((sn) => {
//                             return (
//                             <option>{sn.staff_name}</option>
//                             )
//                         }) : ""}
//                 </select>
//                 <br/>
//                 <label htmlFor="email">Email: </label>
//                 <input type="email" id="email" name="email"/>
//                 <br/>
//                 <label htmlFor="department_id">Department: </label>
//                 <select id="department_id" name="department_id">
//                 {department_name
//                     ? department_name.map((dept) => {
//                         return (<option key={dept.department_id} value={dept.department_id}>
//                             {dept.name}
//                         </option>);
//                     })
//                      : ""}
//                 </select>
//                 <br/>
//                 <label htmlFor="job_role">Job Role:</label>
//                 <select id="job_role" name="job_role">
//                     {job_role ? job_role.map((jr) => {
//                         return(
//                             <option>
//                                 {jr.job_role}
//                             </option>
//                         )
//                     }) : ""}
//                 </select>
//                 <br/>
//                 <button type="submit" onCLick={HandSub}>Submit</button>
//             </form>
//         </div>
//     );
// }

import axios from "axios";
import { useEffect , useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function CreateEmployee() {
    const { id } = useParams();
    const history = useHistory();

    const [department_name, setDepartmentName] = useState("");
    useEffect(() => {
        async function getDepartment() {
            axios.get("http://localhost:3001/getdepartment").then((response) =>{
                setDepartmentName(response.data);
            });
        }
        getDepartment();
    }, []);

    const [staff_name, setStaffName] = useState("");
    useEffect(() => {
        async function getStaffName() {
            axios.get("http://localhost:3001/getstaffname").then((response) => {
                setStaffName(response.data);
            });
        }
        getStaffName();
    }, []);

    const [job_role, setJobRole] = useState("");
    useEffect(() => {
        async function getJobRole() {
            axios.get("http://localhost:3001/getjobroles").then((response) => {
                setJobRole(response.data);
            });
        }
        getJobRole();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            await axios.post("http://localhost:3001/createemployee", formData);
            // Redirect to success page
            history.push(`/adminhome/${id}`);
        } catch (error) {
            console.error("Error submitting form: ", error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Employee creation</h1>
                <br/>
                <label htmlFor="staff_name">Staff Name: </label>
                <input type="text" id="staff_name" name="staff_name"/>
                <br/>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username"/>
                <br/>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password"/>
                <br/>
                <label htmlFor="reporting_to">Reporting To:</label>
                <select id="reporting_to" name="reporting_to">
                    {staff_name ? staff_name.map((sn, index) => (
                        <option key={index}>{sn.staff_name}</option>
                    )) : ""}
                </select>
                <br/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email"/>
                <br/>
                <label htmlFor="department_id">Department: </label>
                <select id="department_id" name="department_id">
                    {department_name ? department_name.map((dept) => (
                        <option key={dept.department_id} value={dept.department_id}>
                            {dept.name}
                        </option>
                    )) : ""}
                </select>
                <br/>
                <label htmlFor="job_role">Job Role:</label>
                <select id="job_role" name="job_role">
                    {job_role ? job_role.map((jr, index) => (
                        <option key={index}>{jr.job_role}</option>
                    )) : ""}
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
