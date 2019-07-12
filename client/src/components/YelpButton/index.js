import React from "react";
import "./style.css";

function YelpButton (props) {
 
    return (
        
       
        <button className="btn btn-dark" data-name={props.dishName} onClick={props.yelp}>Search Near You</button>
        
    )
    
}

export default YelpButton;