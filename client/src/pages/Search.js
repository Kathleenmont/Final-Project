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
import Asia from "../components/Asia";
import animateScrollTo from 'animated-scroll-to';
import "./search.css";
import ScrollableAnchor, {
  configureAnchors,
  goToAnchor
} from "react-scrollable-anchor";

import Nav from "../components/Nav";

let query;
let style;

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInputClick = this.handleInputClick.bind(this);
    // this.state.currentMap =this.state.currentMap.bind(this)

    this.state = {
      foods: [],
      yelp: [],
      continent: "",
      country: "",
      dishName: "",
      description: "",
      image: "",
      userName: this.props.auth.userName,
      userId: this.props.auth.userId,
      // worldMap: true,
      showSearch: false,
      showYelp: false,
      currentMap: this.props.currentMap
    };
  }

  handleWorldMap() {
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return {
        currentMap: "world map",
        showSearch: false,
        showYelp: false
      };
    });

    console.log(this.state);
  }
  onSearchClick = () => {
    this.handleWorldMap();
    // this.setState({
    //   currentMap: "world map",
    //   showSearch: false
    // });
    console.log("WORKED!!!!" + JSON.stringify(this.state));
  };

  handleContinent(map) {
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return {
        continent: map,
        currentMap: map
      };
    });
    console.log(this.state);
  }

  continentOnClick = e => {
    e.preventDefault();
    let map = e.target.getAttribute("data-search");
    console.log(this.continent);
    console.log(this.state.worldMap);
    // this.setState({
    //   continent: this.continent,
    //   currentMap: this.continent
    // });
    this.handleContinent(map);
    console.log(this.state);
  };

  componentDidMount() {
    this.setState({
      currentMap: "world map",
      showSearch: false,
      showYelp: false
    });
  }

  // loadFoods = () => {
  //   API.getFoods()
  //     .then(res => {
  //       this.setState({
  //         foods: res.data,
  //         continent: "",
  //         country: "",
  //         dishName: "",
  //         description: "",
  //         image: ""
  //       });
  //     })

  //     .catch(err => console.log(err));
  // };

  // loadFoodsEvent = e => {
  //   console.log("in load books event");
  //   e.preventDefault();
  //   this.loadFoods();
  // };

  

 scrollToFoodSearch() {
  const myVar = setTimeout(this.goToFood, 300);
}
 goToFood = () => {
  animateScrollTo(document.querySelector('#searchCountries'))
}
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
          continent: this.continent,
          country: "",
          dishName: "",
          description: "",
          image: ""
        });
      })
      .catch(err => console.log(err));

      // animateScrollTo(document.querySelector('#searchCountries'));
      this.scrollToFoodSearch();

      // animateScrollTo(document.querySelector('#searchCountries'));
  };

  scrollToYelpSearch() {
    const myVar = setTimeout(this.goToYelp, 800);
  }
   goToYelp = () => {
    animateScrollTo(document.querySelector('#searchYelp'))
  }

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
          image: "",
          showYelp: true
        });
      })

      .catch(err => console.log(err));
      this.scrollToYelpSearch();
  };

  saveButtonClick = key => {
    console.log(key);
    console.log(this.state);
    let i;
    for (i = 0; i < this.state.foods.length; i++) {
      if (key === this.state.foods[i].id) {
        console.log("SAVED this passed in" + this.state.foods[i]);

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
        }).catch(err => console.log(err));
      }
    }
  };

  render() {
    console.log(this.props);
    // configureAnchors({offset: -60, scrollDuration: 200})

    return (
      <div>
        <div className="link-container">
          <a href="#world-map" className="scroll">
            {" "}
            world map{" "}
          </a>
        </div>
        <div className="link-container">
          <a href="#continentMap" className="scroll">
            {" "}
            continent map{" "}
          </a>
        </div>
        <div className="link-container">
          <a href="#searchCountries" className="scroll">
            {" "}
            country search results{" "}
          </a>
        </div>
        <div className="link-container">
          <a href="#searchYelp" className="scroll">
            {" "}
            yelp serch results{" "}
          </a>
        </div>
        <Nav click={this.onSearchClick} currentMap={this.state.currentMap} />
        <div id="world-map" className="scroll-section">
          <WorldMap
            handleInputClick={this.handleInputClick}
            continentOnClick={this.continentOnClick}
            currentMap={this.state.currentMap}
            getContinent={this.getContinent}
          />
        </div>
        <div id="continentMap" className="scroll-section">
          <NorthAmerica
            handleInputClick={this.handleInputClick}
            currentMap={this.state.currentMap}
          />
          <SouthAmerica
            handleInputClick={this.handleInputClick}
            currentMap={this.state.currentMap}
          />
          <Africa
            handleInputClick={this.handleInputClick}
            currentMap={this.state.currentMap}
          />
          <Europe
            handleInputClick={this.handleInputClick}
            currentMap={this.state.currentMap}
          />
          <Asia
            handleInputClick={this.handleInputClick}
            currentMap={this.state.currentMap}
          />
        </div>

        <div id="searchCountries" className="scroll-section">
          <SearchResultsWrapper showSearch={this.state.showSearch}>
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
        </div>

        <div id="searchYelp" className="scroll-section" >
          {this.state.yelp.map(yel => (
            <YelpCard
            showYelp={this.state.showYelp}
              key={yel.id}
              name={yel.name}
              image={yel.image_url}
              address={yel.location.address1}
              yelpLink={yel.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
