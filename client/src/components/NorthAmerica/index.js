import React from "react";
import "./style.css";
import NA from "../../images/north_america.png";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };

function NorthAmerica(props) {
  console.log(props.continent)
  return (
    <div className="mapWrapper-north-america" style={props.continent === "north america" ? styleBlock : styleNone}>
      <div className="image-container-north-america">
        <img className="northAmerica" src={NA} alt="north america map" />
        <div>
          <span
            className="dot unitedStates-dot"
            onClick={props.handleInputClick}
            data-search="United States"
          />
          <span
            className="dot canada-dot"
            onClick={props.handleInputClick}
            data-search="Canada"
          />
          <span
            className="dot puertoRico-dot"
            onClick={props.handleInputClick}
            data-search="Puerto Rico"
          />
          <span
            className="dot mexico-dot"
            onClick={props.handleInputClick}
            data-search="Mexico"
          />
        </div>
      </div>
    </div>
  );
}

export default NorthAmerica;
