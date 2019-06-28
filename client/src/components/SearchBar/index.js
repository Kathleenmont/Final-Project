import React from "react";
import "./style.css";



function SearchBar ({handleInputChange, value}) {
    console.log(handleInputChange)
  
    return (
        <div className="jumbotron bg-white">
            <h3>Book Search</h3>
           
                <input className="form-control search-bar" value={value} onChange={(event) => handleInputChange(event)} default="Book-Name" ></input>
                {/* {props.children} */}
            
        </div>
    )
  
}

export default SearchBar;