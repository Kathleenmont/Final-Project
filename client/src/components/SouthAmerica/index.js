import React from "react";
import "./style.css";
import SA from "../../images/south_america.png";

function SouthAmerica(props) {
  return (
    <div className="mapWrapper-south-america">
      <div className="image-container-south-america">
        <img className="southAmerica" src={SA} alt="south america map" />
        <div>
          <span
            className="dot Brazil-dot"
            onClick={props.handleInputClick}
            data-search="Brazil"
          />
          <span
            className="dot Peru-dot"
            onClick={props.handleInputClick}
            data-search="Peru"
          />
          <span
            className="dot Colombia-dot"
            onClick={props.handleInputClick}
            data-search="Colombia"
          />
         
        </div>
      </div>
    </div>
  );
}

export default SouthAmerica;
