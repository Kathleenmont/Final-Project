import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login";
// import NoMatch from "./pages/NoMatch";
import "./App.css";
// make state with
// userName 



// if userName is empty 

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Search} />
              <PrivateRoute exact path="/saved" component={Saved} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
