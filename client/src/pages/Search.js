import React, { Component } from "react";
import API from "../utils/API";
import SearchResultsWrapper from "../components/SearchResultsWrapper";
import SearchCard from "../components/SearchCard";
import WorldMap from "../components/WorldMap";
import NorthAmerica from "../components/NorthAmerica";
import SouthAmerica from "../components/SouthAmerica";
import Africa from "../components/Africa";
import Europe from "../components/Europe";
import YelpCard from "../components/YelpCard";

let query;
let style;

class Search extends Component {
  state = {
    foods: [],
    yelp:[],
    continent: "",
    country: "",
    dishName: "",
    description: "",
    image: "",
    userName: this.props.auth.userName,
    userId: this.props.auth.userId,
    worldMap: Boolean,
    showSearch: Boolean
  };



  continentOnClick = e => {
    e.preventDefault();
    this.continent = e.target.getAttribute("data-search");
    console.log(this.continent);
    console.log(this.state.worldMap);
    this.setState({
      continent: this.continent,
      worldMap: false
    });
    console.log(this.state.worldMap);
  };

  componentDidMount() {
    this.setState({
      worldMap: true,
      showSearch: false, 
    });
  }

  loadFoods = () => {
    API.getFoods()
      .then(res => {
        this.setState({
          foods: res.data,
          continent: "",
          country: "",
          dishName: "",
          description: "",
          image: ""
        });
      })

      .catch(err => console.log(err));
  };

  loadFoodsEvent = e => {
    console.log("in load books event");
    e.preventDefault();
    this.loadFoods();
  };

  handleInputClick = e => {
    e.preventDefault();
    console.log(e.target.getAttribute("data-search"));
    query = e.target.getAttribute("data-search");
    const search = { coun: query };
    API.getFoodsByCountry(search)
      .then(res => {
        console.log(res);
        this.setState({
          foods: res.data,
          showSearch: true,
          continent: "",
          country: "",
          dishName: "",
          description: "",
          image: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleInputClickYelp = e => {
    e.preventDefault();
 
    const search = { search: e.target.getAttribute("data-name") };
  
    API.search(search)
      .then(res => {
        console.log(res.data.businesses);
        this.setState({
          yelp: res.data.businesses,
          continent: "",
          country: "",
          dishName: "",
          description: "",
          image: ""
        });
      })

      .catch(err => console.log(err));
  };


  saveButtonClick = key => {
    console.log(key);
    console.log(this.state);
    let i;
    for (i = 0; i < this.state.foods.length; i++) {
      if (key === this.state.foods[i].id) {
        console.log(
          "SAVED this passed in" + this.state.foods[i]
        );

        const newFood = {
          id: this.state.foods[i].id,
          continent: this.state.foods[i].continent,
          country: this.state.foods[i].country,
          dishName: this.state.foods[i].dishName,
          description: this.state.foods[i].description,
          image: this.state.foods[i].image,
          saved: true
        };
        console.log(newFood);
        API.saveFood({
          foodId: this.state.foods[i].id,
          userId: this.state.userId
       
        })
          .catch(err => console.log(err));
      }
    }
  };

  render() {
    console.log(style);
    return (
      <div>
        <WorldMap
          handleInputClick={this.handleInputClick}
          continentOnClick={this.continentOnClick}
          worldMap={this.state.worldMap}
          getContinent={this.getContinent}
      
        />
    

        <NorthAmerica handleInputClick={this.handleInputClick} continent={this.state.continent}/>
        <SouthAmerica handleInputClick={this.handleInputClick} continent={this.state.continent}/>
        <Africa handleInputClick={this.handleInputClick} continent={this.state.continent}/>
        <Europe handleInputClick={this.handleInputClick} continent={this.state.continent}/>

        <SearchResultsWrapper showSearch={this.state.showSearch} >
          {this.state.foods.map(food => (
            <SearchCard
              saveButtonClick={this.saveButtonClick}
              key={food.id}
              id={food.id}
              continent={food.continent}
              country={food.country}
              dishName={food.dishName}
              description={food.description}
              image={food.image}
              yelp={this.handleInputClickYelp}
            />
          ))}
        </SearchResultsWrapper>
       
        {this.state.yelp.map(yel => (
            <YelpCard
           
              key={yel.id}
              name={yel.name}
              image={yel.image_url}
              address={yel.location.address1}
              yelpLink={yel.url}
             
            />
          ))}
      </div>
    );
  }
}

export default Search;
