import React from "react";
import { withRouter} from "react-router-dom";
import auth from "../../utils/auth.js"


console.log(auth.isAuthenticated)


const AuthButton = withRouter(({ history }, props) =>  (
    auth.isAuthenticated ? (
      <p>
        Welcome {auth.userName}! <button onClick={() => {
          auth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  ))
export default AuthButton