import React from "react";
import { Link, withRouter } from "react-router-dom";
import AuthButton from "../AuthButton";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg container-flex">
      <Link className="navbar-brand" to="/">
      <h1>First Taste </h1>
      </Link>
      <div className="nav-link-div">
      <Link className="navbar-brand" onClick={props.click} to="/">
        Find
      </Link>
      <Link className="navbar-brand" to="/saved">
        My List
      </Link>
      </div>
      
      {/* <div className="welcome-text-container"> */}
        <AuthButton userName={props.userName} />
      {/* </div> */}
    </nav>
  );
}

export default Nav;

// import React from "react";
// import { withRouter} from "react-router-dom";
// import auth from "../../utils/auth.js"

// console.log(auth.isAuthenticated)

// const AuthButton = withRouter(({ history }, props) =>  (
//     auth.isAuthenticated ? (
//       <p>
//         Welcome {auth.userName}! <button onClick={() => {
//           auth.signout(() => history.push('/'))
//         }}>Sign out</button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
//   ))
// export default AuthButton
