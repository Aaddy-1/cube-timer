import React, {useState} from "react";
import { useEffect } from "react";
import Timer from '/Users/aadeesh/Programming/cube-timer/src/timer.jsx';

// Functional Components
function StopWatch() {
    // Defining state properties
    // Using hooks
    // The first argument is the state and the second argument is a function that updates it
    // useState sets the default value for the variable, not the function
    // We set isPause to be true initially
    const [isPaused, setIsPaused] = useState(true);
    // We set the currTime to be 0 initially
    const [currTime, setCurrTime] = useState(0);
    // Defining the text on the pause/resume button
    const [pauseText] = useState("Pause/Resume");
    // Defining the text on the rest function
    const [resetText] = useState("Reset");

    useEffect(() => {
        // We initially set the interval to null each time the function is called
        interval = null;
        if (isPaused === false) {
            setInterval(() => {
                // We take a copy of currTime so that we do not modify currTime
                let time = currTime;
                // We increment the time by 10 every 10 milliseconds
                setCurrTime(time + 10)
            }, 10);
        }
        // Else we will stop increasing the time by using clearInterval
        else {
            clearInterval(interval);
        }
    }, [isPlaying, isPaused]);


    // handling the pause/resume button, we're gonna control everything with just one button for now
    
    const pauseResume = () => {
        setIsPaused(!isPaused);
    }

    // handling the reset button

    const reset = () => {

        // We pause the timer
        setIsPaused(true);

        // We set the currTime back to 0
        setCurrTime(0);

    }

    
        
    return (
        // We will add the timer element inside the stopWatch element
        <div className = "stopWatch">
            <Timer time={currTime}/>
            <button class="pauseButton" onClick={pauseResume}> {pauseText} </button>
            <button class="resetButton" onClick={reset}> {resetText} </button>
        </div>
    )
}
export default StopWatch;

