import React from "react";
import  ReactDOM from "react-dom";

function nav(){
    return(
        <>
        <div className="nav">
            <div className="navleft">
                <h1>James Omwoyo</h1>
            </div>
            <div className="navright">
                <ul>
                    <li><a href="./banner">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
        </>


    )
}
export default nav