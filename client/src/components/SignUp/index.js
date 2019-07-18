import React from "react";
import { Redirect} from "react-router-dom";
// import auth from "../../utils/auth.js";
// import API from "../../utils/API";
import Nav from "../Nav";
import "./style.css";

class SignUp extends React.Component {
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

  signUp = e => {
    e.preventDefault();
    console.log(this.state);
    let userName = this.state.userName;
    let password = this.state.password;
    // let userInfo = { userName: userName, password: password };
    if (!this.state.password || !this.state.userName) {
      alert("Please fill out form!");
    } else if (this.state.password.length < 6) {
      alert(`Password must be at least 6 charactors long.`);
    } else {
      // console.log(userInfo);
      this.props.auth.authenticateForSignUp(userName, password, (err) => {
        if(!err) {
          this.setState(() => ({
            redirectToReferrer: true
          }));
          console.log(this.state);
        } else {
          alert("Sign up failed. Try again.")
        }
      })
    }
  };

        // .then(res => {
          // console.log(res);
          // res.data === null
          //   ? this.setState({ hasUserName: false })
          //   : this.setState({ hasUserName: true });
          // console.log(this.state);
          // if (this.state.hasUserName === true) {
          //   console.log(
          //     "User name already taken, Login or use different username"
          //   );
          //   // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
          // } else {
            // API.signUpUser(userInfo)
    //           .then(res => {
    //               console.log(res)
    //             auth.authenticate(() => {
    //                 this.setState(() => ({
    //                   redirectToReferrer: true,
                     
    //                 }));
    //               }, userName);
    //           })
    //           .catch(err => console.log(err));
    //         console.log(this.state);
    //       }
  //       })
  //   //     .catch(err => console.log(err));
  //   //   console.log(this.state);
  //   }
  // };
  render() {
    // const { from } = this.props.location.state || { from: { pathname: "/" } };
    const  redirectToReferrer  = this.state.redirectToReferrer;
  
    if (redirectToReferrer === true) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className="sign-up-container">
         <Nav userName={this.state.userName}/>
         <div className="container">
        <div className="row login-row">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="login-title">Sign Up</h2>
            <form className="signup">
              <div className="form-group">
                <label htmlFor="inputuserNameSignUp">User Name</label>
                <input
                  name="userName"
                  onChange={this.handleInputChange}
                  type="userName"
                  className="form-control"
                  id="userName-input"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label htmlfor="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Password"
                />
              </div>
              <div
                style={{ display: "none" }}
                id="alert"
                className="alert alert-danger"
                role="alert"
              >
                <span
                  className="glyphicon glyphicon-exclamation-sign"
                  aria-hidden="true"
                />
                <span className="sr-only">Error:</span> <span className="msg" />
              </div>
              <button
                type="submit"
                onClick={this.signUp}
                className="btn signup-btn"
              >
                Sign Up
              </button>
            </form>
            <br />
            <p className="login-text">
               Already a user? <a href="/login" className="login-link">Log in</a>
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
