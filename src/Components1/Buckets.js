import BucketOne from "./BucketOne";
import BucketTwo from "./BucketTwo";
import { useState } from "react"


function Buckets(){

  
    const [datas,setDatas] = useState([
        {
            name : "item1",
             id : 1,
            nameOfBucket : "bucket-1"
        },
        {
            name : "item2",
             id : 2,
            nameOfBucket : "bucket-1"
        },
        {
            name : "item3",
             id : 3,
            nameOfBucket : "bucket-1"
        },
        {
            name : "item4",
             id : 4,
            nameOfBucket : "bucket-1"
        },
        {
            name : "item5",
             id : 5,
            nameOfBucket : "bucket-1"
        },
        {
            name : "item6",
             id : 6,
            nameOfBucket : "bucket-1"
        },
       
    ])
    const [selected,setSelected] = useState([])

    const addItems = ()=>{
        if(selected.length == 0){
            alert("Select atleast one element for add to Box-2❗❗")
        }else{
              
        const res = datas.filter(item => selected.includes(item.id));
        const newData = res.map(item =>({ ...item, nameOfBucket: "bucket-2" }));
        // console.log(newData)
        const clone = [...datas]
        const final = clone.filter((dt)=> !selected.includes(dt.id))
        // console.log(final)
        setDatas([...final,...newData])
        setSelected([])
        alert("The element moved into Box-2✅✅") 
        }
  }

    const removeItems =()=>{
        if(selected.length == 0){
            alert("Select atleast one element to Remove from Box-2..!")
        }else{
            const res = datas.filter(item => selected.includes(item.id));
            const newData = res.map(item =>({ ...item, nameOfBucket: "bucket-1" }));
            // console.log(newData)
            const clone = [...datas]
            const final = clone.filter((dt)=> !selected.includes(dt.id))
            // console.log(final)
            setDatas([...final,...newData])
            setSelected([])
            alert("The element removed from Box-2✅✅")
        }
 }

    const addAllItems = () =>{
        const newData = datas.map(item =>({ ...item, nameOfBucket: "bucket-2" }));
        setDatas(newData)
        alert("All elements moved into Box-2✅✅") 
    }

    const removeAllItems = ()=>{
        const newData = datas.map(item =>({ ...item, nameOfBucket: "bucket-1" }));
        setDatas(newData)
        alert("All elements removed from Box-2✅✅") 
    }
    
   console.log(datas)
   console.log(selected)

    return(
        <div className="bkts-container">
          
         <BucketOne data={datas} selected={selected} setSelected={setSelected}/>
         <div className="btns">
         <button onClick={addItems}>Add</button>
         <button onClick={removeItems}>Remove</button>
         <button onClick={addAllItems}>Add All</button>
         <button onClick={removeAllItems}>Remove All</button>
         </div>
         <BucketTwo data={datas} selected={selected} setSelected={setSelected}/>
        </div>
    )
  }
  export default Buckets;