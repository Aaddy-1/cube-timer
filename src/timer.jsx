import React from "react";
import "./timer.css";

// We are going to stick to the convention of making one react component per file
// To improve maintainability

export default function Timer(props) {

    // This will return a component which displays the current time on the stop watch 

    return (
        <div className="timer">
            <span className="digits">
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="mili-sec"> 
                {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
        </div>
    )
    
}