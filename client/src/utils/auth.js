import React from "react";
// import login from "../components/Login"
export default  {
    isAuthenticated: false,
    // add ui stuff to this function 
    
    userName: "",
    password: "",
    email: "",
    // email
    // the job of authenticate function is to populate these propterties 
    // should make into state
    authenticate( cb, userName) {
      this.isAuthenticated = true;
      console.log(userName)
      this.userName = "kathleen";
      this.email =  "k@k.com";
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }