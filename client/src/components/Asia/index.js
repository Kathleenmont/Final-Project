import React from "react";
import "./style.css";
import Afr from "../../images/asia.png";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };

function Asia(props) {
  return (
    <div className="mapWrapper-asia continent" style={props.currentMap === "asia" ? styleBlock : styleNone}>
      <div className="image-container-asia">
        <img className="asia" src={Afr} alt="Asia Map" />
        <div>
          <span
            className="dot Korea-dot"
            onClick={props.handleInputClick}
            data-search="Korea"
            data-type="Korean"
          />
          <span
            className="dot Indonesia-dot"
            onClick={props.handleInputClick}
            data-search="Indonesia"
            data-type="Indonesian"
          />
          <span
            className="dot China-dot"
            onClick={props.handleInputClick}
            data-search="China"
            data-type="Chinese"
          />
        </div>
      </div>
    </div>
  );
}

export default Asia;