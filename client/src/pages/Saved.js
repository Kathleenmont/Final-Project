import React, { Component } from "react";
import API from "../utils/API";
// import auth from "../utils/auth";
import SearchCard from "../components/SearchCard";
import SearchResultsWrapper from "../components/SearchResultsWrapper";
import YelpCard from "../components/YelpCard";
import TriedCard from "../components/TriedCard";
import Nav from "../components/Nav";
import SaveCard from "../components/SaveCard";
import "./saved.css";


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
    rating: ""
  };

  componentDidMount() {
    this.loadFoods();
    // this.loadTriedFoods();
    console.log(this.state);
  }

 

  loadFoods = () => {
    console.log("WHAT");
    console.log(this.state);
    let id = { userId: this.state.userId };
    API.getSavedFood(id)
      .then(res => {
       let foodsArray = []
       let i;
       for (i = 0; i < res.data[0].Food.length; i++) {
         if (res.data[0].Food[i].UsersFood.tried === false) {
           foodsArray.push(res.data[0].Food[i])
      
         }
       }
          this.setState({
            foods: foodsArray,
            // search: query,
            continent: "",
            country: "",
            dishName: "",
            description: "",
            image: ""
          });
        console.log(res.data[0].Food);
      
        console.log(this.state);
      })
      .catch(err => console.log(err));

      this.loadTriedFoods();
  };

  deleteButtonClick = key => {
    console.log(key);
    let i;
    for (i = 0; i < this.state.foods.length; i++) {
      if (key === this.state.foods[i].id) {
        console.log(
          "food to delete" + this.state.foods[i]
        );
        API.deleteFood({
          foodId: this.state.foods[i].id,
          userId: this.state.userId
        })
        
          .catch(err => console.log(err));

      }
    }
    this.loadFoods();
    // this.loadTriedFoods();
    
  }

  deleteTriedButtonClick = key => {
    console.log(key);
    let i;
    for (i = 0; i < this.state.foodsTried.length; i++) {
      if (key === this.state.foodsTried[i].id) {
        console.log(
          "food to delete" + this.state.foodsTried[i]
        );
        API.deleteFood({
          foodId: this.state.foodsTried[i].id,
          userId: this.state.userId
        })
        
          .catch(err => console.log(err));

      }
    }
    this.loadFoods();
    // this.loadTriedFoods();
    
  }

  TriedButtonClick = (key, rating )=> {
      console.log(key);
      console.log(rating)
      let i;
      for (i = 0; i < this.state.foods.length; i++) {
        if (key === this.state.foods[i].id) {
          console.log(
            "food to delete" + this.state.foods[i]
          );
          API.deleteFood({
            foodId: this.state.foods[i].id,
            userId: this.state.userId
          })
            .catch(err => console.log(err));
            API.triedFood({
              foodId: this.state.foods[i].id,
              userId: this.state.userId,
              tried: true,
              rating: rating
            })
            .catch(err => console.log(err));
  
        }
      }
     this.loadFoods();
    //  this.loadTriedFoods();
    }

  handleInputClickYelp = e => {
    e.preventDefault();

    console.log(e.target.getAttribute("data-name"));
    const search = { search: e.target.getAttribute("data-name") };

    API.search(search)
      .then(res => {
        console.log(res.data.businesses);
        this.setState({
          yelp: res.data.businesses,
          // search: query,
          continent: "",
          country: "",
          dishName: "",
          description: "",
          image: ""
        });
      })

      .catch(err => console.log(err));
    console.log(this.state.yelp);
  };


  loadTriedFoods = () => {
    console.log("WHAT");
    console.log(this.state.userId);
    let id = { userId: this.state.userId };
    API.getSavedFood(id)
      .then(res => {
       let triedFoodsArray = []
       let i;
       for (i = 0; i < res.data[0].Food.length; i++) {
         if (res.data[0].Food[i].UsersFood.tried === true) {
           console.log(res.data[0].Food[i])
           triedFoodsArray.push(res.data[0].Food[i])
      
         }
       }
          this.setState({
            foodsTried: triedFoodsArray,
            // search: query,
            continent: "",
            country: "",
            dishName: "",
            description: "",
            image: ""
          });
        console.log(res.data[0].Food);
      
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
     
      <div id="search-page-container">
         <Nav click={this.onSearchClick} currentMap={this.state.currentMap} userName={this.state.userName}/>
         {/* <h1>Dishes to TRY!</h1> */}
        <div className="want-to-try-div container-fluid saved-wrapper">
         
        {/* <Jumbotron /> */}
        {/* <SearchResultsWrapper> */}
        {this.state.foods.map(food => (
          <SaveCard
            // saveButtonClick={this.saveButtonClick}
            key={food.id}
            id={food.id}
            continent={food.continent}
            country={food.country}
            dishName={food.dishName}
            description={food.description}
            image={food.image}
            tried={this.TriedButtonClick}
            yelp={this.handleInputClickYelp}
            delete={this.deleteButtonClick}
            button="tried"
            
          />
        ))}
      </div >
        {/* </SearchResultsWrapper> */}
        <div className="yelp-results">
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
        <h1>Dishes I've Tried</h1>
        <div className="tried-container container-fluid saved-wrapper">
       
        {this.state.foodsTried.map(foodTried => (
          <TriedCard
            // saveButtonClick={this.saveButtonClick}
            key={foodTried.id}
            id={foodTried.id}
            continent={foodTried.continent}
            country={foodTried.country}
            dishName={foodTried.dishName}
            description={foodTried.description}
            image={foodTried.image}
            rating={foodTried.UsersFood.rating}
            yelp={this.handleInputClickYelp}
            delete={this.deleteTriedButtonClick}
          />
        ))}
        </div>
       
      </div>
    );
  }
}

export default Saved;
