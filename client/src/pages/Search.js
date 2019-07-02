import React, { Component } from "react";
import API from "../utils/API";
// import SearchBar from "../components/SearchBar"
// import SearchButton from "../components/SearchButton"
import SearchResultsWrapper from "../components/SearchResultsWrapper"
import SearchCard from "../components/SearchCard"
import WorldMap from "../components/WorldMap"
import NorthAmerica from "../components/NorthAmerica"
import SouthAmerica from "../components/SouthAmerica"
let query;
let continent;
let style;




class Search extends Component {
  // constructor(props) {
  //   super(props);
   
  // }
  state = {
    foods: [],
    // search: query,
    title: "",
    authors: [],
    description: "",
    image: "",
    link: "",
    worldMap: Boolean
  };
 

  // worldMapShow = () => {
  //   this.state.worldMap ?  styleNone = { display : "none" } : styleBlock = { display : "block" }
  // }

  continentOnClick = (e) => {
    e.preventDefault();
      continent = e.target.getAttribute('data-search');
      console.log(continent)
      console.log(this.state.worldMap)
      this.setState({
        worldMap: false
      })

      // this.worldMapShow();
      console.log(this.state.worldMap)
  }

  componentDidMount() {
    // this.loadFoods();
    this.setState({
      worldMap: true
    })
    console.log(this.state);
  }

  loadFoods = () => {
    console.log("WHAT")
    API.getFoods()
      .then(res =>
        {console.log(res.data)
        this.setState({
          foods: res.data,
          // search: query,
          title: "",
          authors: "",
          discription: "",
          image: "",
          link: ""
        
        })}
      )

      .catch(err => console.log(err));
    console.log(this.state.foods);
  };

  loadFoodsEvent = e => {
    console.log("in load books event");
    e.preventDefault();
    this.loadFoods();
  };

  apiCountrySearch = (query) => {
    console.log("WHAT")
    const search = {country: query}
    API.getFoodsByCountry(search)
      .then(res =>
        {console.log(res.data)
        this.setState({
          foods: res.data,
          // search: query,
          continent: "",
          country: "",
          dishName: "",
          description: "",
          image: "",

        
        })}
      )

      .catch(err => console.log(err));
    console.log(this.state.foods);

  };

  handleInputClick = e => {
    e.preventDefault();
    console.log(e.target.getAttribute('data-search'))
    query = e.target.getAttribute('data-search');
    const search = {coun: query}
    API.getFoodsByCountry(search)
      .then(res =>
        {console.log(res)
        this.setState({
          foods: res.data,
          // search: query,
          title: "",
          authors: "",
          discription: "",
          image: "",
          link: ""
        
        })}
      )

      .catch(err => console.log(err));
    console.log(this.state.foods);
    
    // this.loadBooks();
    // this.loadFoodsEvent(e);
  };

  
  // handleInputChange = e => {
  //   query = e.target
  //   // .getAttribute('data-search');
  //   console.log(query);
  //   this.setState({
  //     search: query
  //   });
  // };

  saveButtonClick = key => {
    console.log(key);
    console.log(this.state);
    let i;
    for (i = 0; i < this.state.books.length; i++) {
      if (key === this.state.books[i].id) {
        console.log("SAVED this passed in" +this.state.books[i].volumeInfo.title);
       
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
    console.log(style)
    return (
      <div>
        
        <WorldMap 
        continentOnClick={this.continentOnClick}
        worldMap={this.state.worldMap}
        // style={this.state.worldMap === true ? styleBlock : styleNone}
        
        />
        <NorthAmerica handleInputClick={this.handleInputClick}/>
        <SouthAmerica handleInputClick={this.handleInputClick}/>
     
     
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
