import React from "react";
import  ReactDOM  from "react-dom";

function card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={`../images/${props.image}`} alt="" />
                <div className="piram">
                <p>{props.poster}</p>
                <h4>{props.title}</h4>
                <p>{props.views}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default card