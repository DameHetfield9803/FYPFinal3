import {Link} from "react-router-dom";
export default function Forbidden({hasBack}) {
    return (
      <div className="text-center mt-30vh">
        <h1 className="font-weight-bold"> 403 | Forbidden</h1>
        <div className="mb-3">
          You do not have permission to access this page.
        </div>
        {!hasBack && (
          <Link className="text-primary" to="/">
            <i className="fas fa-angle-left mx-2"></i>
            <u>Back</u>
          </Link>
        )}
      </div>
    );
  }  