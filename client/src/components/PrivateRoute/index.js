import React from "react";
import {  Redirect, Route} from "react-router-dom";
// import auth from "../../utils/auth.js"


const PrivateRoute = ({ component: Component, auth, currentMap, ...rest }) => (
    <Route {...rest} render={(props) => {
      console.log(auth)
      return auth.isAuthenticated === true
        ? <Component {...props} auth={auth} currentMap={currentMap}/>
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    }} />
  )

  export default PrivateRoute