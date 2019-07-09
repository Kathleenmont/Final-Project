import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../../utils/auth.js";
import API from "../../utils/API"


class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    userName: "",
    password: "",
    isUser: Boolean
  };

  handleInputChange = e => {
    // Getting the value and name of the input which triggered the change
    let value = e.target.value;
    const name = e.target.name;
    
    if (name === "password") {
      value = value.substring(0, 15);
    }

    console.log("name " + name)
    console.log("value " + value)
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  login = (e) => {
    e.preventDefault();
    console.log(this.state)
    let userName = this.state.userName;
    let password = this.state.password;
    let userInfo = {user: userName, password: password}
    if (!this.state.password || !this.state.userName) {
        alert("Please fill out form!");
      } else if (this.state.password.length < 6) {
        alert(
          `Password must be at least 6 charactors long.`
        );
      } else {
        console.log(userInfo)
        API.checkUserLogin(userInfo)
        
        .then(res => {
          console.log(res.data);
         (res.data === null) ? this.setState({isUser: false}) : this.setState({isUser: true});
         console.log(this.state)
         if (this.state.isUser === true) {
            console.log("true!!!!!!")
        auth.authenticate(() => {
            this.setState(() => ({
              redirectToReferrer: true,
             
            }));
          }, userName);
        // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      } else {
          console.log("try to login again ro go to sign in ")
      }
        })
  
        .catch(err => console.log(err));
      console.log(this.state);
    
    }
  
   
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <h2>Login Form</h2>
              <form className="login">
                <div className="form-group">
                  <label htmlFor="inputUserNameLogin">User Name</label>
                  <input
                    // value={this.state.userName}
                    name="userName"
                    onChange={this.handleInputChange}
                    type="userName"
                    className="form-control"
                    id="userName-input"
                    placeholder="User Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPasswordLogin">Password</label>
                  <input
                    // value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    
                    type="password"
                    className="form-control"
                    id="password-input"
                    placeholder="Password"
                  />
                </div>
                <button onClick={this.login} className="btn btn-default">
                  Login
                </button>
              </form>
              <br />
              <p>
                Or sign up <a href="/">here</a>
              </p>
            </div>
          </div>
        </div>
        <p>You must log in to view the page at{from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
