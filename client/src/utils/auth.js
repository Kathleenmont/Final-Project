export default  {
    isAuthenticated: false,
    // add ui stuff to this function 
    
    // username: "",
    // password
    // email
    // the job of authenticate function is to populate these propterties 
    // should make into state
    authenticate(cb) {
      this.isAuthenticated = true
      this.username = 
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }