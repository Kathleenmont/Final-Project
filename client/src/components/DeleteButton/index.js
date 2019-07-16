import React from "react";
import "./style.css";


const DeleteButton = props => {
    return (
        <button className="btn btn-dark delete-btn" id={props.id} onClick={() => {props.delete(props.id)}}>Delete</button>
    )
}

export default DeleteButton