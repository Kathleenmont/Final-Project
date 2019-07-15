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
  constructor(props){
    super(props);
  this.state = {
    auth: auth,
    currentMap: "world map",
    showSearch: false,
    showYelp: false

  };
}
// handleWorldMap() {
//   this.setState((state) => {
//     // Important: read `state` instead of `this.state` when updating.
//     return {
//       currentMap: "world map",
//       showSearch: false
//     }
//   });

//   console.log(this.state)
// };
//   onSearchClick = () => {
//     this.handleWorldMap()
//     // this.setState({
//     //   currentMap: "world map",
//     //   showSearch: false
//     // });
// console.log("WORKED!!!!" + JSON.stringify(this.state))
//   }

  render() {
    
    return (
      <div>
        <Router>
          <AuthButton userName={this.state.auth.userName}/>
          <div>
            {/* <Nav click={this.onSearchClick} currentMap={this.state.currentMap}/> */}
            <Switch>
              <PrivateRoute exact path="/" component={Search} auth={this.state.auth} currentMap={this.state.currentMap} searchClick={this.onSearchClick}/>
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
