import React from "react";
import "./style.css";
import map from "../../images/world_map-1.png";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };


function WorldMap(props) {
  console.log(props);


  return (
    <div className="mapWrapper" style={props.worldMap === true ? styleBlock : styleNone}>
      <div className="image-container">
        <img className="worldMap" src={map} alt="world map" />
        <div>
          <span
            onClick={props.handleInputClickYelp}
            className="dot northAmerica-dot"
            data-search="north america"
          />
          <span
            onClick={props.continentOnClick}
            className="dot southAmerica-dot"
            data-search="south america"
          />
          <span
            onClick={props.continentOnClick}
            className="dot africa-dot"
            data-search="africa"
          />
          <span
            onClick={props.continentOnClick}
            className="dot europe-dot"
            data-search="europe"
          />
          <span
            onClick={props.continentOnClick}
            className="dot asia-dot"
            data-search="asia"
          />
          <span
            onClick={props.continentOnClick}
            className="dot australia-dot"
            data-search="australia"
          />
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
