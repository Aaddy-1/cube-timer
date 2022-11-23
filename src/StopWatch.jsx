import React, {useState} from "react";
import Timer from '/Users/aadeesh/Programming/cube-timer/src/timer.jsx';

// Functional Components
function StopWatch() {
    // Defining state properties
    // Using hooks
    // The first argument is the state and the second argument is a function that updates it
    // useState sets the default value for the variable, not the function
    const [isPlaying, setIsPlaying] = useState(false);
    // We set isPause to be 1 initially
    const [isPaused, setIsPaused] = useState(true);
    // We set the currTime to be 0 initially
    const [currTime, setCurrTime] = useState(0);


    return (
        // We will add the timer element inside the stopWatch element
        <div className = "stopWatch">
            <Timer time={currTime}/>
        </div>
    )
}

