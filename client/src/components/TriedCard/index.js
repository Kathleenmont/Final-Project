import React from "react";
import "./style.css";
import YelpButton from "../YelpButton";
import DeleteButton from "../DeleteButton";
// import SaveButton from "../SaveButton";
let fly;
class TriedCard extends React.Component {

 
      render() { 

  return (
   
    <div className="container bg-light">
      <span href={this.props.link}>
        <div className="row row" style= {(() => {
        switch (this.props.rating) {
          case 1:   return {
            border: '10px solid white'
          };
          case 2: return {
            border: '10px solid #D39AA1'
          };
          case 3:  return {
            border: '10px solid #D36370'
          };
          case 4:  return {
            border: '10px solid #D33447'
          };
          default:      return {
            border: '10px solid white'
          };;
        }
      })()}>
          <div className="col-sm-4">
            <div className="card card-1">
              <div className="card-img text-center">
                <img
                  alt={this.props.name}
                  src={this.props.image}
                  width="200"
                  className="image"
                />
              </div>
            </div>
          </div>
        
      
          <div className="col-sm-7">
            <div className="card">
              <div className="card-body" >
                <div className="card-header text-center">
                <p className="card-title">{this.props.country}</p>
                <p className="card-text">{this.props.dishName}</p>
                </div>
              
            
            <p className="card-text">{this.props.description}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-1">
          <DeleteButton delete={this.props.delete} id={this.props.id}/>
            {/* <button data-id={props.id} onClick={() => {props.saveButtonClick(props.id)}} className="btn btn-info save-btn">Save</button> */}
            {/* <SaveButton data-id={props.id} key={props.key} SaveButtonClick={props.SaveButtonClick}/> */}
            <YelpButton yelp={this.props.yelp} dishName={this.props.dishName}/>
          </div>
          </div>
      </span>
    </div>
  );
    }
};

export default TriedCard;