import React from "react";
import "./style.css";

const YelpCard = props => {
    return (
      <div className="container bg-light">
        <a href={props.yelpLink} target="_blank" rel="noopener noreferrer">
          <div className="card yelpCard">
            <div className="card-body">
              <div className="card-header text-center">
              <p className="card-title">{props.name}</p>
                <p className="card-title">{props.address}</p>
              </div>
  
            </div>
            <div className="card-img-bottom text-center">
              <img
                alt={props.name}
                src={props.image}
                width="200"
                className="image"
              />
            </div>
          </div>
        </a>
      </div>
    );
  };
  
  export default YelpCard;
  