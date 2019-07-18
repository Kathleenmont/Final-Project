import React, { Component } from "react";
import API from "../utils/API";
import YelpCard from "../components/YelpCard";
import TriedCard from "../components/TriedCard";
import Nav from "../components/Nav";
import "./tried.css";
import animateScrollTo from "animated-scroll-to";

const styleNone = { display: "none" };

const styleBlock = { display: "block" };

class Tried extends Component {
  constructor(props) {
    super(props);
    this.handleInputClickYelpTried = this.handleInputClickYelpTried.bind(this);
    this.state = {
      yelp: [],
      foodsTried: [],
      continent: "",
      country: "",
      dishName: "",
      description: "",
      image: "",
      userName: this.props.auth.userName,
      userId: this.props.auth.userId,
      rating: "",
      showYelp: false
    };
  }

  componentDidMount() {
    this.loadTriedFoods();
  }

  deleteTriedButtonClick = key => {
    let i;
    for (i = 0; i < this.state.foodsTried.length; i++) {
      if (key === this.state.foodsTried[i].id) {
        API.deleteFood({
          foodId: this.state.foodsTried[i].id,
          userId: this.state.userId
        }).catch(err => console.log(err));
      }
    }
    this.loadTriedFoods();
  };

  clearSearchYelp = () => {
    this.setState({
      showYelp: false,
      yelp: []
    })
  };

  scrollToYelpSearch() {
    const myVar = setTimeout(this.goToYelp, 1500);
  }

  goToYelp = () => {
    animateScrollTo(document.querySelector("#searchYelp"));
  };

  handleInputClickYelpTried = e => {
    e.preventDefault();

    const type = e.target.getAttribute("data-country");
    const search = { search: e.target.getAttribute("data-name"), type: type };

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
          type: type,
          showYelp: true
        });
      })

      .catch(err => console.log(err));
    this.scrollToYelpSearch();
  };

  loadTriedFoods = () => {
    let id = { userId: this.state.userId };
    API.getSavedFood(id)
      .then(res => {
        let triedFoodsArray = [];
        let i;
        for (i = 0; i < res.data[0].Food.length; i++) {
          if (res.data[0].Food[i].UsersFood.tried === true) {
            triedFoodsArray.push(res.data[0].Food[i]);
          }
        }
        this.setState({
          foodsTried: triedFoodsArray,
          continent: "",
          country: "",
          dishName: "",
          description: "",
          image: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="search-page-container">
        <Nav
          click={this.onSearchClick}
          currentMap={this.state.currentMap}
          userName={this.state.userName}
        />
        <div className="tried-heading">
          <h2 id="tried-list" className="page-heading tried-title">
            Dishes I've Tried
          </h2>
          <div className="rating-box">
            <p className="rating-text text-1">1 = </p>
            <span className="rating-dot rating-1" />
            <p className="rating-text text-2">2 = </p>
            <span className="rating-dot rating-2" />
            <p className="rating-text text-3">3 = </p>
            <span className="rating-dot rating-3" />
            <p className="rating-text text-4">4 = </p>
            <span className="rating-dot rating-4" />
          </div>
        </div>
        <div className="tried-container container-fluid saved-wrapper">
          {this.state.foodsTried.map(foodTried => (
            <TriedCard
              key={foodTried.id}
              id={foodTried.id}
              continent={foodTried.continent}
              country={foodTried.country}
              dishName={foodTried.dishName}
              description={foodTried.description}
              image={foodTried.image}
              rating={foodTried.UsersFood.rating}
              yelpTried={this.handleInputClickYelpTried}
              delete={this.deleteTriedButtonClick}
            />
          ))}
        </div>

        <div
          id="searchYelp"
          className="scroll-section"
          style={this.state.showYelp ? styleBlock : styleNone}
        >
          <br />
          <div className="link-container">
            <a
              href="#tried-list"
              className="scroll"
              style={this.state.showYelp ? styleBlock : styleNone}
              onClick={this.clearSearchYelp}
            >
              {" "}
              Tried List{" "}
            </a>
          </div>
          <div className="yelp-wrapper">
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

export default Tried;
