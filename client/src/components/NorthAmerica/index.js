import React from "react";
import "./style.css";
import NA from "../../images/north_america.png";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };

function NorthAmerica(props) {
  console.log(props.continent)
  return (
    <div className="mapWrapper-north-america continent" style={props.currentMap === "north america" ? styleBlock : styleNone}>
      <div className="image-container-north-america">
        <img className="northAmerica" src={NA} alt="north america map" />
        <div>
        
          
          <span
            className="dot unitedStates-dot"
            onClick={props.handleInputClick}
            data-search="United States"
            data-type="American"
          />
           <span id="hover-US">United States</span>
          <span
            className="dot canada-dot"
            onClick={props.handleInputClick}
            data-search="Canada"
            data-type="Canadian"
          />
          <span id="hover-canada">Canada</span>
          <span
            className="dot puertoRico-dot"
            onClick={props.handleInputClick}
            data-search="Puerto Rico"
            data-type="Puerto Rican"
          />
          <span id="hover-PR">Puerto Rico</span>
          <span
            className="dot mexico-dot"
            onClick={props.handleInputClick}
            data-search="Mexico"
            data-type="Mexican"
          />
          <span id="hover-mexico">Mexico</span>
        </div>
      </div>
    </div>
  );
}

export default NorthAmerica;
