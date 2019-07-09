import React from "react";
import "./style.css";
const styleNone = { display : "none" };

const styleBlock = { display : "block" };

const SearchResultsWrapper = (props) => {
    console.log(props)
return( 
<div onClick={props.handleInputClick} className="container container-fluid wrapper bg-dark" style={props.showSearch === true ? styleBlock : styleNone}>{props.children}</div>
)
}

export default SearchResultsWrapper;