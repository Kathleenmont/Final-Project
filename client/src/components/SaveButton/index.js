import React from "react";
import "./style.css";

const SaveButton = props => {
console.log(props)

 
    return (   
        <button data-id={props.id} onClick={() => {props.SaveButtonClick(props.id)}} className="btn btn-info save-btn">Save</button>
    )


   
}

export default SaveButton;


//     return (
//         <button className="btn btn-dark save-btn" data-id={props.id} onClick={() => {props.tried(props.id)}}>Tried It</button>
//     )
// }

