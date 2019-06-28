import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "../components/SearchBar"
import SearchButton from "../components/SearchButton"
import SearchResultsWrapper from "../components/SearchResultsWrapper"
import SearchCard from "../components/SearchCard"
let query;

class Search extends Component {
  // constructor(props) {
  //   super(props);
   
  // }
  state = {
    foods: [],
    search: query,
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
   
  };

  componentDidMount() {
    this.loadFoods();
    console.log(this.state);
  }

  loadFoods = () => {
    API.getFoods()
      .then(res =>
        this.setState({
          foods: res.data,
          search: query,
          title: "",
          authors: "",
          discription: "",
          image: "",
          link: ""
        
        })
      )

      .catch(err => console.log(err));
    console.log(this.state.foods);
  };

  loadFoodsEvent = e => {
    console.log("in load books event");
    e.preventDefault();
    this.loadFoods();
  };

  handleInputClick = e => {
    e.preventDefault();
    // query = e.target.value;
    console.log(query);

    console.log("in here");
    // query = e.target.value;
    console.log("TTTAARRGGEETT =====" + e.target);
    console.log(query);
    // this.loadBooks();
    this.loadFoodsEvent(e);
  };

  handleInputChange = e => {
    query = e.target.value;
    console.log(query);
    this.setState({
      search: query
    });
  };

  saveButtonClick = key => {
    console.log(key);
    console.log(this.state);
    let i;
    for (i = 0; i < this.state.books.length; i++) {
      if (key === this.state.books[i].id) {
        console.log("SAVED this passed in" +this.state.books[i].volumeInfo.title);
        // this.setState({
        //   saved: true
        // });
        // console.log("STATE" + JSON.stringify(this.state))
        const newBook=
        {
          title: this.state.books[i].volumeInfo.title,
          authors: this.state.books[i].volumeInfo.authors,
          description: this.state.books[i].volumeInfo.description,
          image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
          link: this.state.books[i].volumeInfo.infoLink,
          saved: true
        }
        console.log(newBook);
        API.saveBook({
          id: this.state.books[i].id,
          title: this.state.books[i].volumeInfo.title,
          authors: this.state.books[i].volumeInfo.authors,
          description: this.state.books[i].volumeInfo.description,
          image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
          link: this.state.books[i].volumeInfo.infoLink,
          saved: true
        })
          // .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    }
  };

  render() {
    return (
      <div>
        
        
        <form>
          <SearchBar
            value={this.state.query}
            handleInputChange={this.handleInputChange}
          />
          <SearchButton
            loadBooksEvent={this.loadBooksEvent}
            handleInputClick={this.handleInputClick}
          />
        </form>
        {/* </SearchBar> */}
        <SearchResultsWrapper>
          {this.state.foods.map(food => (
            <SearchCard
              saveButtonClick={this.saveButtonClick}
              key={food._id}
              id={food._id}
              continent={food.continent}
              country={food.country}
              dishName={food.dishName}
              description={food.description}
              image={food.image}
          
            />
          ))}
        </SearchResultsWrapper>
      </div>
    );
  }
}

export default Search;
