import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" onClick={props.click} to="/">Search</Link>
      <Link className="navbar-brand" to="/saved">Saved</Link>
    </nav>
  );
}

export default Nav;