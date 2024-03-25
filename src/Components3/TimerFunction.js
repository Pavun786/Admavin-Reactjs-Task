
import { useState } from "react";

function TimerFunction({ setRandom,setScore,score }) {
    // console.log(score)
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
                //  alert(`The Game is Ended..Your Total Point is ${score}`)
                alert('The Game is Ended..!')
                clearInterval(interval);
                clearInterval(intervalId)
               
                 setScore(0)
                setRandom(-1)
                
            }
        }, 1000);
   };

    return (
        <div className="timmer-group">
            {time}
            <button className="timmer-btn" onClick={() => timmer(60)}>Start</button>
        </div>
    );
}

export default TimerFunction;
