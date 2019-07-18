import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import AuthButton from "../AuthButton";
import "./style.css";


function Nav(props) {
  console.log(props)
  return (
    <nav className="navbar navbar-expand-lg container-flex">
      <NavLink  className="navbar-brand" onClick={props.click}  to="/">
      <h1 className="first-taste">First Taste </h1>
      </NavLink>
      <div className="nav-link-div">
      <NavLink activeClassName="active" className="navbar-brand" onClick={props.click} exact to="/">
        Find
      </NavLink>
      <NavLink activeClassName="active" className="navbar-brand" exact to="/saved">
        My List
      </NavLink>
      <NavLink activeClassName="active" className="navbar-brand" exact to="/tried">
        Tried
      </NavLink>
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
