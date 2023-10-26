import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef(0);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <>
    <section>

    
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <div>
        
        <button onClick={handleStart}>Start</button>
          Start time: <span>{new Date(startTime).toLocaleTimeString()}</span>
      </div>

        <div>
        <button onClick={handleStop}>Stop</button>
          End time : <span> {new Date(now).toLocaleTimeString()}</span>        
      </div>
      </section>
    </>
  );
}
