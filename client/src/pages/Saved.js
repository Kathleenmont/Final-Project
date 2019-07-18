import React, { Component } from "react";
import API from "../utils/API";
import YelpCard from "../components/YelpCard";
import Nav from "../components/Nav";
import SaveCard from "../components/SaveCard";
import animateScrollTo from "animated-scroll-to";
import "./saved.css";

const styleNone = { display: "none" };

const styleBlock = { display: "block" };

class Saved extends Component {
  state = {
    foods: [],
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

  componentDidMount() {
    this.loadFoods();
  }

  loadFoods = () => {
    let id = { userId: this.state.userId };
    API.getSavedFood(id)
      .then(res => {
        let foodsArray = [];
        let i;
        for (i = 0; i < res.data[0].Food.length; i++) {
          if (res.data[0].Food[i].UsersFood.tried === false) {
            foodsArray.push(res.data[0].Food[i]);
          }
        }
        this.setState({
          foods: foodsArray,
          continent: "",
          country: "",
          dishName: "",
          description: "",
          image: ""
        });
      })
      .catch(err => console.log(err));
  };

  deleteButtonClick = key => {
    let i;
    for (i = 0; i < this.state.foods.length; i++) {
      if (key === this.state.foods[i].id) {
        API.deleteFood({
          foodId: this.state.foods[i].id,
          userId: this.state.userId
        })
        .catch(err => console.log(err));
      }
    }
    this.loadFoods();
  };

  TriedButtonClick = (key, rating) => {
    let i;
    for (i = 0; i < this.state.foods.length; i++) {
      if (key === this.state.foods[i].id) {
        API.deleteFood({
          foodId: this.state.foods[i].id,
          userId: this.state.userId
        }).catch(err => console.log(err));
        API.triedFood({
          foodId: this.state.foods[i].id,
          userId: this.state.userId,
          tried: true,
          rating: rating
        }).catch(err => console.log(err));
      }
    }
    this.loadFoods();
  };

  clearSearchYelp = () => {
    this.setState({
      showYelp: false,
      yelp: []
    });
  };

  scrollToYelpSearch() {
    const myVar = setTimeout(this.goToYelp, 1500);
  }
  goToYelp = () => {
    animateScrollTo(document.querySelector("#searchYelp"));
  };

  handleInputClickYelpSaved = e => {
    e.preventDefault();
    const type = e.target.getAttribute("data-country");
    const search = { search: e.target.getAttribute("data-name"), type: type };

    API.search(search)
      .then(res => {
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

  render() {
    return (
      <div id="my-list">
        <Nav
          click={this.onSearchClick}
          currentMap={this.state.currentMap}
          userName={this.state.userName}
        />
        <h2 className="page-heading">To Try List</h2>
        <div className="want-to-try-div container-fluid saved-wrapper">
          {this.state.foods.map(food => (
            <SaveCard
              key={food.id}
              id={food.id}
              continent={food.continent}
              country={food.country}
              dishName={food.dishName}
              description={food.description}
              image={food.image}
              tried={this.TriedButtonClick}
              yelp={this.handleInputClickYelpSaved}
              delete={this.deleteButtonClick}
              button="tried"
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
              href="#my-list"
              className="scroll"
              style={this.state.showYelp ? styleBlock : styleNone}
              onClick={this.clearSearchYelp}
            >
              {" "}
              My List{" "}
            </a>
          </div>
          <div className="yelp-wrapper-saved">
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

export default Saved;
