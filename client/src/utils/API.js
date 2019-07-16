import axios from "axios";

export default {
  getFoodsSaved: function() {
    return axios.get("/api/foods/saved");
  },

  // Gets all books
  getFoods: function() {
    console.log("HERE get foods!");
    return axios.get("/api/foods");
  },

  getSavedFood: function(userId) {
    console.log("HERE get foods saved!" + JSON.stringify(userId));
    return axios.post("/api/getsaved", userId);
  },

  checkUserLogin: function(userInfo) {
    console.log("in check userinfo" + JSON.stringify(userInfo));
    return axios.post("/api/user", userInfo);
  },

  checkForUserName: function(userInfo) {
    console.log("in check userName" + JSON.stringify(userInfo));
    return axios.post("/api/username", userInfo);
  },

  signUpUser: function(userInfo) {
    console.log("in user sign up" + JSON.stringify(userInfo));
    return axios.post("/api/signup", userInfo);
  },

  getFoodsByCountry: function(search) {
    console.log("HERE!");
    return axios.post("/api/foods/country", search);
  },

  search: function(search) {
    console.log("in API SEARCH: " + JSON.stringify(search))
    return axios.post("/search", search, yelpResults => {
      console.log("in API SEARCH: " + yelpResults);
      return yelpResults;
    });
  },

  // search2: function(search) {
  //   console.log("in API SEARCH2: " + JSON.stringify(search))
  //   return axios.post("/searchtype", search, yelpResults => {
  //     console.log("in API SEARCH: " + yelpResults);
  //     return yelpResults;
  //   });
  // },

  saveFood: function(foodId) {
    console.log("IN SAVE FOOD!" + JSON.stringify(foodId));
    return axios.post("/api/foods/save", foodId);
  },

  deleteFood: function(foodId) {
    console.log("IN delete FOOD!" + JSON.stringify(foodId));
    return axios.post("/api/foods/delete", foodId);
  },

  triedFood: function(foodId) {
    console.log("In tried FOOD " + JSON.stringify(foodId));
    return axios.post("/api/foods/tried", foodId)
  }

  // Gets the book with the given id
  // getFood: function(id) {
  //   // console.log("inside /api/lskfj")
  //   return axios.get("/api/food/" + id);
  // },
  // Saves a book to the database
  // saveFood: function(foodData) {
  //   console.log(foodData)
  //   return axios.post("/api/food", foodData);
  // },

  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/food/" + id);
  // }
};
