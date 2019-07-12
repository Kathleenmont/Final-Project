import React from "react";
import "./style.css";


const TriedButton = props => {
    // console.log(props)
    return (
        <button className="btn btn-info save-btn" data-id={props.id} onClick={() => {props.tried(props.id)}}>Tried It</button>
    )
}

export default TriedButton