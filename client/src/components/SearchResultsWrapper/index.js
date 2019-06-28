import React from "react";
import "./style.css";

const SearchResultsWrapper = (props) => {
return <div className="container container-fluid wrapper bg-dark">{props.children}</div>
}

export default SearchResultsWrapper;