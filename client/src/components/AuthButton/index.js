import React from "react";
import { withRouter} from "react-router-dom";
import auth from "../../utils/auth.js";
import "./style.css";


console.log(auth.isAuthenticated)


const AuthButton = withRouter(({ history }, props) =>  (
    auth.isAuthenticated ? (
      <p className="auth-text-nav welcome-text navbar-brand">
        Welcome {auth.userName}! <button className="btn logout-btn" onClick={() => {
          auth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p >
    ) : (
      <p className="auth-text-nav">You are not logged in</p>
    )
  ))
export default AuthButton