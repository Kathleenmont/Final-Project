
import React, { Component } from "react";
import API from "../utils/API";
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
//         // this.handleInputClick = this.handleInputClick.bind(this);
//         // this.loadBooksEvent = this.loadBooksEvent.bind(this);
//         // this.loadBooks = this.loadBooks.bind(this);
//       }
      state = {
        foods: [],
        // search: query,
        title: "",
        authors: [],
        description: "",
        image: "",
        link: "",
        saved: true
      };
    
      componentDidMount() {
        this.loadFoods();
        console.log(this.state);
      }

      loadFoods = () => {
        console.log("WHAT");
        API.getFoods()
          .then(res => {
            console.log(res.data);
            this.setState({
              foods: res.data,
              // search: query,
              continent: "",
              country: "",
              dishName: "",
              description: "",
              image: ""
            });
          })
          .catch(err => console.log(err));
          console.log(this.state.foods);
        };
    
    
    //   loadBooksEvent = e => {
    //     console.log("in load books event");
    //     e.preventDefault();
    //     this.loadBooks();
    //   };

    render() {
        // return (
        //     <div>
        //       {/* <Jumbotron /> */}
        //       <SearchResultsWrapper>
        //   {this.state.foods.map(food => (
        //     <SearchCard
        //       saveButtonClick={this.saveButtonClick}
        //       key={food._id}
        //       id={food._id}
        //       continent={food.continent}
        //       country={food.country}
        //       dishName={food.dishName}
        //       description={food.description}
        //       image={food.image}
        //     />
        //   ))}
        //   <h1>SAVED!!!!!!!!!!!!</h1>
        // </SearchResultsWrapper>
        //   </div>
        // )
        return (
          <div>
            <h1>SAVWED!</h1>
            <a href="/login">Login</a>
          </div>

        )
    }
}

export default Saved;