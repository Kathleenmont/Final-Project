import React from "react";
import "./style.css";
import NA from "../../images/north_america.png";

function NorthAmerica (props) {
 
  return (
    <div className="mapWrapper-north-america">
    <div className="image-container-north-america">
      <img className="northAmerica" src={NA} />
      <div>
        <span className="dot unitedStates-dot" />
        <span className="dot canada-dot" />
        <span className="dot puertoRico-dot" />
        <span className="dot mexico-dot" />
        
      </div>
    </div>
    </div>
    
  );
}

export default NorthAmerica;