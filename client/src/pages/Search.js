import React, { Component } from "react";
import API from "../utils/API";
import WorldMap from "../components/WorldMap";
import NorthAmerica from "../components/NorthAmerica";
import SouthAmerica from "../components/SouthAmerica";
import Africa from "../components/Africa";
import Europe from "../components/Europe";
import YelpCard from "../components/YelpCard";
import Asia from "../components/Asia";
import SaveCard from "../components/SaveCard";
import animateScrollTo from 'animated-scroll-to';
import "./search.css";
import Nav from "../components/Nav";


let query;

const styleNone = { display : "none" };

const styleBlock = { display : "block" };



class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.saveButtonClick = this.saveButtonClick.bind(this);

    this.state = {
      foods: [],
      yelp: [],
      continent: "",
      country: "",
      dishName: "",
      description: "",
      image: "",
      type: "",
      userName: this.props.auth.userName,
      userId: this.props.auth.userId,

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
  }
  onSearchClick = () => {
    this.handleWorldMap();
    this.clearSearch();
    this.clearSearchYelp();

  };

  clearSearch = () => {
    this.setState({
      showSearch: false,
      showYelp: false,
      foods: []
    })
  };

  clearSearchYelp = () => {
    this.setState({
      showYelp: false,
      yelp: []
    })
  };

  handleContinent(map) {
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return {
        continent: map,
        currentMap: map
      };
    });
  }


  scrollToContinent() {
    const myVar = setTimeout(this.goToContinent, 100);
  }
   goToContinent = () => {
    animateScrollTo(document.querySelector('#continentMap'))
  }
  continentOnClick = e => {
    e.preventDefault();
    let map = e.target.getAttribute("data-search");
    this.handleContinent(map);
    this.scrollToContinent();
  };

  componentDidMount() {
    this.setState({
      currentMap: "world map",
      showSearch: false,
      showYelp: false
    });
  }

 scrollToFoodSearch() {
  const myVar = setTimeout(this.goToFood, 300);
}
 goToFood = () => {
  animateScrollTo(document.querySelector('#searchCountries'))
}
  handleInputClick = e => {
    e.preventDefault();
    query = e.target.getAttribute("data-search");
    const type = e.target.getAttribute("data-type");
    const search = { coun: query };
    API.getFoodsByCountry(search)
      .then(res => {
        this.setState({
          foods: res.data,
          showSearch: true,
          continent: this.continent,
          type: type,
          country: "",
          dishName: "",
          description: "",
          image: ""
        });
      })
      .catch(err => console.log(err));
      this.scrollToFoodSearch();

  };

  scrollToYelpSearch() {
    const myVar = setTimeout(this.goToYelp, 1500);
  }
   goToYelp = () => {
    animateScrollTo(document.querySelector('#searchYelp'))
  }

  handleInputClickYelp = e => {
    e.preventDefault();
    const search = { search: e.target.getAttribute("data-name"), type: this.state.type};
    API.search(search)
      
      .then(res => 
        {
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
    let i;
    for (i = 0; i < this.state.foods.length; i++) {
      if (key === this.state.foods[i].id) {

        API.saveFood({
          foodId: this.state.foods[i].id,
          userId: this.state.userId
        }).catch(err => console.log(err));
      }
    }
  };

  render() {

    return (
      <div>
       
        <Nav click={this.onSearchClick} currentMap={this.state.currentMap} userName={this.state.userName}/>
        <div id="world-map" className="scroll-section" style={this.state.currentMap === "world map" ? styleBlock : styleNone}>
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
        <div id="searchCountries" className="link-container" style={this.state.showSearch ? styleBlock : styleNone}>
          <a href="#continentMap" className="scroll" onClick={this.clearSearch}>
            {" "}
            Continent{" "}
          </a>
        </div>

      <div className="tried-container container-fluid saved-wrapper">
     
            {this.state.foods.map(food => (
              <SaveCard
                saveButtonClick={this.saveButtonClick}
                key={food.id}
                id={food.id}
                continent={food.continent}
                country={food.country}
                dishName={food.dishName}
                description={food.description}
                image={food.image}
                yelp={this.handleInputClickYelp}
                button="save"
              />
            ))}
       </div>

        <div id="searchYelp" className="scroll-section" style={this.state.showYelp ? styleBlock : styleNone}><br/>
        <div className="link-container">
          <a href="#searchCountries" className="scroll" onClick={this.clearSearchYelp} style={this.state.showYelp ? styleBlock : styleNone}>
            {" "}
            Dishes{" "}
          </a>
        </div>
        
        <div className="yelp-wrapper" >
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
      </div>
    );
  }
}

export default Search;
