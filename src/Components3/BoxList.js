
import React, { useEffect, useState } from "react";
import SingleBox from "./SingleBox";
import TimerFunction from "./TimerFunction";

function BoxList() {
    const [number, setNumber] = useState(9);
    const [random, setRandom] = useState(null);
    const [score, setScore] = useState(0);
    const [generateRandom, setGenerateRandom] = useState(true);
    const [intervalIds, setIntervalIds] = useState([]); 

    const renderBoxes = (randomValue) => {
        const boxes = [];
        for (let i = 1; i <= number; i++) {
            boxes.push(<SingleBox key={i} num={i} value={randomValue} score={score} setScore={setScore} />);
        }
        return boxes;
    };

    return (
        <div className="boxlist">
            <div>
                <TimerFunction  setRandom={(random)=>setRandom(random)} />
            </div>
            <div className="boxes">{renderBoxes(random)}</div>
            <div>Total Score : {score}</div>
        </div>
    );
}

export default BoxList;