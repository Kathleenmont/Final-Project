import axios from "axios";

export default {
  // // gets saved foods to load 
  // getFoodsSaved: function() {
  //   return axios.get("/api/foods/saved");
  // },

  // Gets all foods
  getFoods: function() {
    return axios.get("/api/foods");
  },

// retrieves saved food based on user id
  getSavedFood: function(userId) {;
    return axios.post("/api/getsaved", userId);
  },

  // checks users login to see if correct 
  checkUserLogin: function(userInfo) {
    return axios.post("/api/user", userInfo);
  },

  // checks to see if user name is taken
  checkForUserName: function(userInfo) {
    console.log("in check userName" + JSON.stringify(userInfo));
    return axios.post("/api/username", userInfo);
  },

  // signs up a new user
  signUpUser: function(userInfo) {
    return axios.post("/api/signup", userInfo);
  },

  // get foods by coutry name
  getFoodsByCountry: function(search) {
    return axios.post("/api/foods/country", search);
  },

  // yelp search 
  search: function(search) {
    return axios.post("/search", search, yelpResults => {
      return yelpResults;
    });
  },

  // saves food using food id
  saveFood: function(foodId) {
    return axios.post("/api/foods/save", foodId);
  },

  // deletes food using food id
  deleteFood: function(foodId) {
    return axios.post("/api/foods/delete", foodId);
  },

  // moves food to tried 
  triedFood: function(foodId) {
    return axios.post("/api/foods/tried", foodId)
  }

};
