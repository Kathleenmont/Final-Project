import React from "react";
import "./style.css";
import map from "../../images/world_map-1.png";

function WorldMap(props) {
  console.log(map);
  return (
    <div className="mapWrapper">
      <div className="image-container">
        <img className="worldMap" src={map} />
        <div>
          <span className="dot northAmerica-dot" />
          <span className="dot southAmerica-dot" />
          <span className="dot africa-dot" />
          <span className="dot europe-dot" />
          <span className="dot asia-dot" />
          <span className="dot australia-dot" />
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
