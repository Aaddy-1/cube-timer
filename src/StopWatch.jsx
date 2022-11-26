import React, {useState} from "react";
import { useEffect, useRef } from "react";
import Timer from '/Users/aadeesh/Programming/cube-timer/src/timer.jsx';

// Functional Components
function StopWatch() {
    // Defining state properties
    // Using hooks
    // The first argument is the state and the second argument is a function that updates it
    // useState sets the default value for the variable, not the function
    // We set isPause to be true initially
    const [isPaused, setIsPaused] = useState(true);
    const [stopText] = useState("Stop");
    // Defining the text on the reset function
    const [resetText] = useState("Reset");
    // Defining the text for the Start Button
    const [startText] = useState("Start");
    // Defining the startTime for the timer;
    // We use node References, references in node are basically like states
    // Since we are not interacting with the front end in any way using the startTime variable, we will use referecnes instead of states
    const [displayTime, setDisplayTime] = useState(0);

    const startTimeRef = useRef(0);


    useEffect(() => {
        let interval = null;
        let currentTime = new Date().getTime();
        if (isPaused === false) {

            interval = setInterval(() => {
                setDisplayTime(currentTime - startTimeRef.current);
            }, 500);
        }
        else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }

    });


    // handling the pause/resume button, we're gonna control everything with just one button for now
    const start = () => {
        // We unpause the timer
        setIsPaused(false);
        // We get the time at which the timer started
        startTimeRef.current = new Date().getTime();

    }
    
    const stop = () => {
        // We pause/unpause the timer
        setIsPaused(true);
        // We get the time at which the timer started
    }

    // handling the reset button

    const reset = () => {
        setDisplayTime(0);
    }

    
        
    return (
        // We will add the timer element inside the stopWatch element
        <div className = "stopwatch">
            <Timer time={displayTime}/>
            <button class="startButton" onClick={start}> {startText} </button>
            <button class="stopButton" onClick={stop}> {stopText} </button>
            <button class="resetButton" onClick={reset}> {resetText} </button>
        </div>
        
    )
}
export default StopWatch;

