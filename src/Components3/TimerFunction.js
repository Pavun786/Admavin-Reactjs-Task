
import { useState } from "react";

function TimerFunction({ setRandom }) {
    const [time, setTime] = useState();

    const timmer = (duration) => {
        let remainingTime = duration;
        
        const intervalId = setInterval(() => {
          const randomNumber = Math.floor(Math.random() * 9) + 1;
          
         setRandom(randomNumber)
      }, 1200);

        const interval = setInterval(() => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            setTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);

            remainingTime = remainingTime - 1;

            if (remainingTime < 0) {
                clearInterval(interval);
                clearInterval(intervalId)
                setRandom(-1)
            }
        }, 1000);

       
    };

    return (
        <div className="timer">
            {time}
            <button onClick={() => timmer(10)}>Start</button>
        </div>
    );
}

export default TimerFunction;
