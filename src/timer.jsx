import React from "react";
import "./timer.css";

// We are going to stick to the convention of making one react component per file
// To improve maintainability

export default function Timer(props) {

    // This will return a component which displays the current time on the stop watch 
    console.log(props.time);
    // We will write a function that will help pad leading zeroes to our numbers
    const zeroPad = (num, places) => String(num).padStart(places, '0');


    // Our miliseconds
    const milisecondsValue = props.time % 1000;
    const miliSeconds = zeroPad(milisecondsValue, 3);
    // Our seconds
    const secondsValue = ((props.time - (miliSeconds)) / 1000) % 60;
    const seconds = zeroPad(secondsValue, 2);
    // Our Minutes
    const minutesValue = Math.floor(((props.time - (miliSeconds)) / 1000) / 60);
    const minutes = zeroPad(minutesValue, 2);
    console.log(props.time);
    console.log(((props.time - (props.time % 1000)) % 60));
    return (
        <div className="timer">
            <div className="seconds">
                {minutes + ":"}
            </div>
            <div className="seconds">
                {seconds + "."}
            </div>
            <div className="mili-sec">
                {miliSeconds}
            </div>
        </div>
    )
    
}