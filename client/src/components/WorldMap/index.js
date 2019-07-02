import React from "react";
import "./style.css";
import map from "../../images/world_map-1.png";

function WorldMap(props) {
  console.log(map);
  return (
    <div className="mapWrapper">
      <div className="image-container">
        <img className="worldMap" src={map} alt="world map" />
        <div>
          <span
            onClick={props.handleInputClick}
            className="dot northAmerica-dot"
            data-search="north america"
          />
          <span
            onClick={props.handleInputClick}
            className="dot southAmerica-dot"
            data-search="south america"
          />
          <span
            onClick={props.handleInputClick}
            className="dot africa-dot"
            data-search="africa"
          />
          <span
            onClick={props.handleInputClick}
            className="dot europe-dot"
            data-search="europe"
          />
          <span
            onClick={props.handleInputClick}
            className="dot asia-dot"
            data-search="asia"
          />
          <span
            onClick={props.handleInputClick}
            className="dot australia-dot"
            data-search="australia"
          />
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
