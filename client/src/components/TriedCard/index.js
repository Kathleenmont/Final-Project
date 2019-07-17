import React from "react";
import "./style.css";
import YelpButton from "../YelpButton";
import DeleteButton from "../DeleteButton";
// import SaveButton from "../SaveButton";
// let fly;
class TriedCard extends React.Component {
  render() {
    return (
      // <div className="container">
      <span href={this.props.link}>
        <div
          className="card card-tried"
          style={(() => {
            switch (this.props.rating) {
              case 1:
                return {
                  borderTop: "25px solid white"
                };
              case 2:
                return {
                  borderTop: "25px solid #A58694"
                };
              case 3:
                return {
                  borderTop: "25px solid #A54371"
                };
              case 4:
                return {
                  borderTop: "25px solid #A5004D"
                };
              default:
                return {
                  borderTop: "25px solid white"
                };
            }
          })()}
        >
          <div className="card-header text-center">
            <h3 className="card-title">{this.props.country}</h3>
            <p className="card-text">{this.props.dishName}</p>
          </div>
          <div className="card-img-top  tried-img-div text-center">
            <img
              alt={this.props.name}
              src={this.props.image}
              width="330"
              className="image tried-image"
            />
          </div>

          <div className="card-body">
            <p className="card-text">{this.props.description}</p>
          </div>

          <div className="buttons">
          <DeleteButton delete={this.props.delete} id={this.props.id} />
          {/* <button data-id={props.id} onClick={() => {props.saveButtonClick(props.id)}} className="btn btn-info save-btn">Save</button> */}
          {/* <SaveButton data-id={props.id} key={props.key} SaveButtonClick={props.SaveButtonClick}/> */}
          <YelpButton yelp={this.props.yelp} dishName={this.props.dishName} />
          </div>
        </div>
      </span>
      // </div>
    );
  }
}

export default TriedCard;
