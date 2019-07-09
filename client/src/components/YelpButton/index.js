import React from "react";
import "./style.css";

function YelpButton (props) {
 
    return (
        
       
        <a href={props.link}><button className="btn btn-info" >View</button></a>
        
    )
    
}

export default YelpButton;