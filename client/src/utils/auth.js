import API from "./API";

export default {
  isAuthenticated: false,
  userId: "",
  userName: "",
  password: "",

  authenticate(userName, password, cb) {
    let userInfo = { userName: userName, password: password };
    API.checkUserLogin(userInfo).then(res => {
      console.log(res.data);
      if (res.data !== null) {
        this.userId = res.data.id;
        this.userName = userName;
        this.password = password;
        this.isAuthenticated = true;
        cb(null);
      } else {
        cb(-1);
      }
    });
  },

  authenticateForSignUp(userName, password, cb) {
    let userInfo = { userName: userName, password: password };
    API.checkForUserName(userInfo).then(res => {
      console.log(res.data);
      if (res.data === null) {
        API.signUpUser(userInfo)
          .then(res => {
            console.log(res.data);
            this.userId = res.data.id;
            this.userName = userName;
            this.password = password;
            this.isAuthenticated = true;
          })
          .catch(err => console.log(err));
        // this.isAuthenticated = true;
        cb(null);
      } else {
        alert("User name already taken try different username");
        cb(-1);
      }
    });
  },

  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // fake async
  }
};
