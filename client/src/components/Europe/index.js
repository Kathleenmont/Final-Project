import React from "react";
import "./style.css";
import Eur from "../../images/europe.png";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };

function Europe(props) {
  return (
    <div className="mapWrapper-europe continent" style={props.currentMap === "europe" ? styleBlock : styleNone}>
      <div className="image-container-europe">
        <img className="europe" src={Eur} alt="Europe Map" />
        <div>
          <span
            className="dot Poland-dot"
            onClick={props.handleInputClick}
            data-search="Poland"
            data-type="Polish"
          />
          <span id="hover-poland">Poland</span>
          <span
            className="dot Greece-dot"
            onClick={props.handleInputClick}
            data-search="Greece"
            data-type="Greek"
          />
          <span id="hover-greece">Greece</span>
          <span
            className="dot Spain-dot"
            onClick={props.handleInputClick}
            data-search="Spain"
            data-type="Spanish"
          />
          <span id="hover-spain">Spain</span>
        </div>
      </div>
    </div>
  );
}

export default Europe;