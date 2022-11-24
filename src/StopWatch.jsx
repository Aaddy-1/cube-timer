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
    const [isActive, setIsActive] = useState(false);
    // We set the currTime to be 0 initially
    const [currTime, setCurrTime] = useState(0);
    // Defining the text on the pause/resume button
    const [pauseText] = useState("Pause/Resume");
    // Defining the text on the rest function
    const [resetText] = useState("Reset");
    // Defining the text for the Start Button
    const [startText] = useState("Start");

    useEffect(() => {
        // We initially set the interval to null each time the function is called
        //console.log(currTime);
        // We define a variable called interval and set it to null, THIS IS IMPORTANT
        let interval = null;
        if ((isActive) && (isPaused === false)) {
            // We set the value of this variable to our setinterval function so that we can stop it in case we want to pause/reset
            interval = setInterval(() => {
                // We take a copy of currTime so that we do not modify currTime
                // We increment the time by 10 every 10 milliseconds
                setCurrTime((currTime) => currTime + 50)
            }, 50);
        }
        // Else we will stop increasing the time by using clearInterval
        else {
            console.log("trigerred");
            // Stopping the above mentioned interval method using clearInterval();
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    });


    // handling the pause/resume button, we're gonna control everything with just one button for now
    const start = () => {
        setIsActive(true);
        setIsPaused(false);
    }
    
    const pauseResume = () => {
        setIsPaused(!isPaused);
        console.log(isPaused, isActive);
    }

    // handling the reset button

    const reset = () => {
        // We deactivate the timer
        setIsActive(false)
        
        // // We pause the timer
        // setIsPaused(true);

        // We set the currTime back to 0
        setCurrTime(0);

    }

    
        
    return (
        // We will add the timer element inside the stopWatch element
        <div className = "stopWatch">
            <Timer time={currTime}/>
            <button class="startButton" onClick={start}> {startText} </button>
            <button class="pauseButton" onClick={pauseResume}> {pauseText} </button>
            <button class="resetButton" onClick={reset}> {resetText} </button>
        </div>
    )
}
export default StopWatch;

