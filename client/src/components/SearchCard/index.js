import React from "react";
import "./style.css";
import YelpButton from "../YelpButton";
import TriedButton from "../TriedButton";
import SaveButton from "../SaveButton";
import DeleteButton from "../DeleteButton";
import ModalRating from "../ModalRating";


const SearchCard = props => {

  return (
    <div className="container bg-light">
      <span href={props.link}>
        <div className="row row">
          <div className="col-sm-4">
            <div className="card card-1">
              <div className="card-img text-center">
                <img
                  alt={props.name}
                  src={props.image}
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
                <p className="card-title">{props.country}</p>
                <p className="card-text">{props.dishName}</p>
                </div>
              
            
            <p className="card-text">{props.description}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-1">
            {/* <TriedButton id={props.id} tried={props.tried}/> */}
            {/* <ModalRating tried={props.tried} {...props} /> */}
            {props.button === "save" ? <SaveButton data-id={props.id} id={props.id} key={props.key} SaveButtonClick={props.saveButtonClick}/> : <ModalRating tried={props.tried} {...props} />}
            {/* <button data-id={props.id} onClick={() => {props.saveButtonClick(props.id)}} className="btn btn-dark save-btn">Save</button> */}
            {/* <SaveButton data-id={props.id} id={props.id} key={props.key} SaveButtonClick={props.saveButtonClick}/> */}
            <YelpButton yelp={props.yelp} dishName={props.dishName}/>
             {props.button !== "save" ? <DeleteButton delete={props.delete} id={props.id}/> : null}
          </div>
          </div>
      </span>
    </div>
  );
};

export default SearchCard;
