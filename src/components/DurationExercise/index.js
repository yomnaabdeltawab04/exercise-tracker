// Duration Exercise

import React, { useState, useEffect, useRef } from "react";

const DurationExercise = ({ name }) => {
  const [running, setRunning] = useState(false);
  const [milliseconds, setMilliseconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 100);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setMilliseconds(0);
    setRunning(false);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;
    return `Timer: ${String(minutes).padStart(2, 
'0')}:${String(seconds).padStart(2, 
'0')}.${String(milliseconds).padStart(3, '0')}`;

  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{formatTime(milliseconds)}</p>
      <button onClick={startStop}>
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default DurationExercise;

