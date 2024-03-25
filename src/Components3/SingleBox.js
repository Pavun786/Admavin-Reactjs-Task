import { useEffect, useState } from "react";
import "../Components3/Box.css"

function SingleBox({num,value,score,setScore}){

    const[showMessage,setShowMessage] = useState()
    const[color,setColor] = useState()
   
    useEffect(()=>{
         if(num == value){
            setShowMessage("HIT")
            setColor()
        }else{
             setShowMessage("")
             setColor()
        }
    },[value])

    const hitButton = ()=>{
        let getValue = document.getElementById(num).innerText
           
        if(getValue == "HIT"){
            setColor(true)
            setScore(score+5)
        }else{
            setColor(false)
            setScore(score-2.5)
        } 
        
    }
   return(
        <div className="box" style={{backgroundColor: color ? "green" : ""}} id={num} onClick={hitButton}>
         <div className="text">{showMessage}</div>  
        </div>
    )
}
export default SingleBox;