import React from "react";
import { Redirect, Route } from "react-router-dom";
import SignUp from "../SignUp";
import Nav from "../Nav";
import "./style.css";

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    userName: "",
    password: "",
  };

  handleInputChange = e => {
    // Getting the value and name of the input which triggered the change
    let value = e.target.value;
    const name = e.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }

    console.log("name " + name);
    console.log("value " + value);
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  login = e => {
    e.preventDefault();
    console.log(this.state);
    let userName = this.state.userName;
    let password = this.state.password;

    if (!password || !userName) {
      alert("Please fill out form!");
    } else if (password.length < 6) {
      alert(`Password must be at least 6 charactors long.`);
    } else {
      this.props.auth.authenticate(userName, password, (err) => {
        if(!err) {
          this.setState(() => ({
            redirectToReferrer: true
          }));
          console.log(this.state);
        }
        else {
          alert("Authentication Failed! Try to login again.")
        }

      })      
    }
  };


  render() {
    // console.log(this.props.location.state.from.pathname)
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      console.log(from);
      return <Redirect to={from} />;
    }

    return (
      <div>
        <Nav userName={this.state.userName}/>
        <div className="container">
          <div className="row login-row">
            <div className="col-md-6 col-md-offset-3">
              <h2 className="login-title">User Login</h2>
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
                <button onClick={this.login} className="btn signup-btn">
                  Login
                </button>
              </form>
              <br />
              <p className="login-text">
              Not a user? <a href="/signup" className="login-text" className="login-link">Sign Up</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Login;
