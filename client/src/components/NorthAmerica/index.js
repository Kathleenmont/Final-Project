import React from "react";
import "./style.css";
import NA from "../../images/north_america.png";

function NorthAmerica(props) {
  return (
    <div className="mapWrapper-north-america">
      <div className="image-container-north-america">
        <img className="northAmerica" src={NA} alt="north america map" />
        <div>
          <span
            className="dot unitedStates-dot"
            onClick={props.handleInputClick}
            data-search="united states"
          />
          <span
            className="dot canada-dot"
            onClick={props.handleInputClick}
            data-search="canada"
          />
          <span
            className="dot puertoRico-dot"
            onClick={props.handleInputClick}
            data-search="puerto rico"
          />
          <span
            className="dot mexico-dot"
            onClick={props.handleInputClick}
            data-search="mexico"
          />
        </div>
      </div>
    </div>
  );
}

export default NorthAmerica;
