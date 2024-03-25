import { useState } from "react"
import "../Components1/bucket.css"
import {useNavigate} from "react-router-dom"

  function BucketOne({data,selected,setSelected}){
  
    //   console.log("props",data)
 

    const selectItems = (id)=>{
         
    //   setSelected([...selected,id])
    if (selected.includes(id)) {
        setSelected(selected.filter(item => item !== id));
    } else {
        setSelected([...selected, id]);
    }
   

    }
    
   
    return(
        <div className="bktOne-container">
            <h4>Box-1</h4>
          <div className="item-groups">
           {
             data.filter((ele)=>(
                ele.nameOfBucket == "bucket-1"
             )).map((dt)=>{
                
                return(
                     <button 
                     className={`items ${selected.includes(dt.id) ? 'selected' : ''}`}
                      onClick={()=>selectItems(dt.id)}>{dt.name}
                      </button>
                   
                )
             })
           } 
          </div>
        </div>
    )
  }
  export default BucketOne;