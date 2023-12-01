import {useEffect, useState} from 'react';
import './timer.css';

const modeTimes = {
    'Work' : 25,
    'Short Break': 5,
    'Long Break': 30
}

const Timer = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('Work'); // work / shortBreak / longBreak
    const [workMode, setWorkMode] = useState(4); // repeat work and short break 4 times
    const [minutesLeft, setMinutesLeft] = useState(25); // inti work minutes (25)
    const [secondsLeft, setSecondsLeft] = useState(0);
    
    function switchMode() {
        if(workMode === 0){
            setMode('Long Break');
            setMinutesLeft(modeTimes['Long Break']);
            setWorkMode((workMode) => workMode - 1);
        }else if(workMode < 0){ // after long break
            reset();
        }else{
            const nextMode = mode === 'Work' ? 'Short Break' : 'Work';
            const nextMinute = modeTimes[nextMode];
            setMode(nextMode);
            setMinutesLeft(nextMinute);

            if(nextMode === 'Work'){
                setWorkMode((workMode) => workMode - 1);
            }
        }
        setSecondsLeft(0);
    }

    function startPause() {
        setIsPaused((isPaused) => !isPaused);
    }

    function reset() {
        // reset
        setIsPaused(true);
        setMinutesLeft(25);
        setSecondsLeft(0);
        setWorkMode(4);
        setMode('Work');
    }

    useEffect(() => {
       if(!isPaused){
        // ticking
        const interval = setInterval(() => {
            if(secondsLeft > 0) {
                setSecondsLeft((secondsLeft) => secondsLeft - 1);
            }
            if(secondsLeft === 0) {
                setMinutesLeft((minutesLeft) => minutesLeft - 1);
                setSecondsLeft(59);
            }
            if(secondsLeft === 0 && minutesLeft === 0){
                // switch modes
                switchMode();
            }
        }, 1000);

        return () => clearInterval(interval);
       }
        
    },[isPaused, secondsLeft, minutesLeft]);

    return(
        <div className='PomoTimer'>
            <div>
                <h1>{mode}</h1>
            </div>
            <div>
                <h1>{minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:{secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}</h1>
            </div>
            <div className='buttons'>
                <button onClick={() => { startPause() }}> {isPaused ? "Start" : "Pause"} </button>
                <button onClick={() => { reset() }}>Reset</button>
            </div>
            
        </div>
    )
}

export default Timer;