import React from "react";
import "./style.css";

function YelpButton (props) {
 
    return (
        
       
        <button className="btn yelp-btn" data-name={props.dishName} onClick={props.yelp}>Search</button>
        
    )
    
}

export default YelpButton;