import {useEffect, useState} from 'react';
import './timer.css';

const modeTimes = {
    'work' : 25,
    'shortBreak': 5,
    'longBreak': 30
}

const Timer = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work'); // work / shortBreak / longBreak
    const [workMode, setWorkMode] = useState(4); // repeat work and short break 4 times
    const [minutesLeft, setMinutesLeft] = useState(25); // inti work minutes (25)
    const [secondsLeft, setSecondsLeft] = useState(0);
    
    function switchMode() {
        if(workMode === 0){
            setMode('longBreak');
            setMinutesLeft(modeTimes['longBreak']);
            setIsPaused(true); // end cycle
        }else{
            const nextMode = mode === 'work' ? 'shortBreak' : 'work';
            const nextMinute = modeTimes[nextMode];
            setMode(nextMode);
            setMinutesLeft(nextMinute);

            if(nextMode === 'work'){
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
                <h2>{minutesLeft < 10 ? '0' + minutesLeft : minutesLeft}:{secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}</h2>
            </div>
            <div className='buttons'>
                <button onClick={() => { startPause() }}> {isPaused ? "Start" : "Pause"} </button>
                <button onClick={() => { reset() }}>Reset</button>
            </div>
            
        </div>
    )
}

export default Timer;