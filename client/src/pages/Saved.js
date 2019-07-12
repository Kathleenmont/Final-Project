import React, { Component } from "react";
import API from "../utils/API";
// import auth from "../utils/auth";
import SearchCard from "../components/SearchCard";
import SearchResultsWrapper from "../components/SearchResultsWrapper";
import YelpCard from "../components/YelpCard";


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
    rating: 4
  };

  componentDidMount() {
    this.loadFoods();
    console.log(this.state);
  }

  loadFoods = () => {
    console.log("WHAT");
    console.log(this.state.userId);
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
      
        console.log(this.state.foods);
      })
      .catch(err => console.log(err));
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
     this.loadFoods()
     
  
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

  render() {
    return (
      <div>
        <div className="want-to-try">
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
            tried={this.TriedButtonClick}
            yelp={this.handleInputClickYelp}
            delete={this.deleteButtonClick}
            
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
        <div className="tried">
        {/* {this.state.foods.map(food => (
          <SearchCard
            // saveButtonClick={this.saveButtonClick}
            key={food.id}
            id={food.id}
            continent={food.continent}
            country={food.country}
            dishName={food.dishName}
            description={food.description}
            image={food.image}
            yelp={this.handleInputClickYelp}
            delete={this.deleteButtonClick}
          />
        ))} */}
        </div>
       
      </div>
    );
  }
}

export default Saved;
