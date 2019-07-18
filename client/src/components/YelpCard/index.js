import React from "react";
import "./style.css";

const YelpCard = props => {
  const styleNone = { display : "none" };

const styleBlock = { display : "block" };
    return (
      // <div className="container bg-light" style={props.showYelp === true ? styleBlock : styleNone}>
        <a href={props.yelpLink} target="_blank" rel="noopener noreferrer" className="yelp-link">
          <div className="card yelpCard">
            <div className="card-body">
              <div className="card-header text-center card-header-yelp">
              <h3 className="card-title">{props.name}</h3>
                <p className="card-title">{props.address}</p>
              </div>
  
            </div>
            <div className="card-img-bottom text-center yelp-img-div">
              <img
                alt={props.name}
                src={props.image}
                width="300"
                className="image"
              />
            </div>
          </div>
        </a>
      // </div>
    );
  };
  
  export default YelpCard;
  