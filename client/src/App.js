import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login";
import AuthButton from "./components/AuthButton";
import SignUp from "./components/SignUp";
import auth from "./utils/auth";
// import API from "./utils/API"
// import NoMatch from "./pages/NoMatch";
import "./App.css";

class App extends Component {

  state = {
    auth: auth
  };

  render() {
    
    return (
      <div>
        <Router>
          <AuthButton userName={this.state.auth.userName}/>
          <div>
            <Nav />
            <Switch>
              <PrivateRoute exact path="/" component={Search} auth={this.state.auth} />
              <PrivateRoute exact path="/saved" component={Saved} auth={this.state.auth} />
              <Route exact path="/login" 
                           render={(props) => <Login {...props} auth={this.state.auth} />} />
              <Route exact path="/signup" render={(props) => <SignUp {...props} auth={this.state.auth} />}
                   />
            </Switch>
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
