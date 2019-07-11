import API from "./API";

export default  {
    isAuthenticated: false,  
    userId: "",
    userName: "",
    password: "",
    
    authenticate(userName, password, cb) {
      let userInfo = { userName: userName, password: password };
      API.checkUserLogin(userInfo)
      .then(res => {
        console.log(res.data);
        if(res.data !== null) {
          this.userId = res.data.id;
          this.userName = userName;
          this.password = password;
          this.isAuthenticated = true;
          cb(null)
        }
        else {
          cb(-1)
        }
      })
    },

    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }