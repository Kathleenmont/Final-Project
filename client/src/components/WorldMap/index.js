import React from "react";
import "./style.css";
import map from "../../images/world_map-1.png";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };


function WorldMap(props) {
  console.log(props);


  return (
    <div className="mapWrapper" style={props.currentMap === "world map" ? styleBlock : styleNone}>
      <div className="image-container">
        <img className="worldMap" src={map} alt="world map" />
        <div>
          <span
            onClick={props.continentOnClick}
            className="dot northAmerica-dot"
            data-search="north america"
          />
          <span id="hover-NA">North America</span>
          <span
            onClick={props.continentOnClick}
            className="dot southAmerica-dot"
            data-search="south america"
          />
          <span id="hover-SA">South America</span>
          <span
            onClick={props.continentOnClick}
            className="dot africa-dot"
            data-search="africa"
          />
          <span id="hover-Africa">Africa</span>
          <span
            onClick={props.continentOnClick}
            className="dot europe-dot"
            data-search="europe"
          />
          <span id="hover-Europe">Europe</span>
          <span
            onClick={props.continentOnClick}
            className="dot asia-dot"
            data-search="asia"
          />
          <span id="hover-Asia">Asia</span>
          {/* <span
            onClick={props.continentOnClick}
            className="dot australia-dot"
            data-search="australia"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
