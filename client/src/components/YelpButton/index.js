import React from "react";
import "./style.css";

function YelpButton (props) {
 
    return (
        
       
        <button className="btn yelp-btn" data-name={props.dishName} onClick={props.yelp} data-country={props.country}>Search</button>
        
    )
    
}

export default YelpButton;