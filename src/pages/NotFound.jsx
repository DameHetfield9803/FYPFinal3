import {Link} from "react-router-dom";
export default function NotFound({hasBack}) {
    return (
      <div className="text-center mt-30vh">
        <h1 className="font-weight-bold"> 404 | Not Found</h1>
        <div className="mb-3">
          Page cannot be found.
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