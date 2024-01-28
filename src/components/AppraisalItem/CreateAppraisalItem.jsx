import axios from "axios";
function handleSubmit(){}
export default function CreateAppraisalItem(){
    return(
        <div>
            <h1>Appraisal Item</h1>
            <body>
                <form>
                    <table>
                        <tr>
                            <th>Rating</th>
                            <th>Comments</th>
                        </tr>
                    </table>
                </form>
            </body>
        </div>
    );
}