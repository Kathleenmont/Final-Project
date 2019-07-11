
import React, { Component } from "react";
import API from "../utils/API";
// import auth from "../utils/auth";
import SearchCard from "../components/SearchCard";
import SearchResultsWrapper from "../components/SearchResultsWrapper";
// // import SearchButton from "../components/SearchButton";
// // import SearchBar from "../components/SearchBar";
// // import Nav from "../components/Nav";
// import Jumbotron from "../components/Jumbotron"
// let query;

class Saved extends Component {
//     constructor(props) {
//         super(props);
// //         // this.handleInputClick = this.handleInputClick.bind(this);
//         // this.loadBooksEvent = this.loadBooksEvent.bind(this);
        // this.loadBooks = this.loadBooks.bind(this);
      // }
      state = {
        foods: [],
        // search: query,
        continent: "",
        country: "",
        dishName: "",
        description: "",
        image: "",
        userName: this.props.auth.userName,
        userId: this.props.auth.userId
      };
    
      componentDidMount() {
        this.loadFoods();
        console.log(this.state);
      }
      

      loadFoods = () => {
        console.log("WHAT");
        console.log(this.state.userId)
        let id = { userId: this.state.userId};
       API.getSavedFood(id)
          .then(res => {
            console.log(res.data[0].Food);
            this.setState({
              foods: res.data[0].Food,
              // search: query,
              continent: "",
              country: "",
              dishName: "",
              description: "",
              image: ""
            });
            console.log(this.state.foods);
          })
          .catch(err => console.log(err));
          
        };

       
    
    
    //   loadBooksEvent = e => {
    //     console.log("in load books event");
    //     e.preventDefault();
    //     this.loadBooks();
    //   };

    render() {
        return (
            <div>
              {/* <Jumbotron /> */}
              {/* <SearchResultsWrapper> */}
          {this.state.foods.map(food => (
            <SearchCard
              // saveButtonClick={this.saveButtonClick}
              key={food.id}
              id={food.id}
              continent={food.continent}
              country={food.country}
              dishName={food.dishName}
              description={food.description}
              image={food.image}
            />
          ))}
          
        {/* </SearchResultsWrapper> */}
        
        
       
          <div>
            <h1>SAVWED!</h1>
            <a href="/login">Login</a>
          </div>
            </div>
        )
    }
}

export default Saved;