import axios from "axios";

// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// const APIKEY = ":keyes&key=AIzaSyB3gUc9O6Z0fR929v3f2B3ahDTY5hYqG74";

// GET "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey"

export default {
  // getFoods: function(query) {
  //   return axios.get(BASEURL + query + APIKEY);
  //   //  return axios.get("/api/books");
  // },

  // getSavedFoods: function() {
  //   return axios.post();
  // },

  // Gets all books
  getFoods: function() {
     console.log("HERE get foods!")
    return axios.get("/api/foods");
  },

  checkUserLogin: function (userInfo) {
    console.log("in check userinfo" + JSON.stringify(userInfo))
    return axios.post("/api/user", userInfo)
  },

  getFoodsByCountry: function(search) {
    console.log("HERE!")
    return axios.post("/api/foods/country", search);
  },

    search: function(searchItem) {
        // const search = {
        //     searchItem
        // }
    // return axios.post("/search", search, (bookResults) => {
    //   console.log(bookResults);
    //   return bookResults;
    // });

    return axios.post("/search", searchItem, (yelpResults) => {
      console.log(yelpResults);
      return yelpResults;
    });
  
  },



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
