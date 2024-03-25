import "../Components1/bucket.css"

function BucketTwo({data,selected,setSelected}){

    console.log(selected)

    const selectItems = (id)=>{
         
        // setSelected([...selected,id])

        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id));
        } else {
            setSelected([...selected, id]);
        }
       
   }
   

    return(
        <div className="bktTwo-container">
            <h4>Box-2</h4>
          <div className="item-groups2">
           {
             data.filter((ele)=>(
                ele.nameOfBucket == "bucket-2"
             )).map((dt)=>{
                return(
                    <button 
                    className={`items ${selected.includes(dt.id) ? 'selected' : ''}`} 
                    onClick={()=>selectItems(dt.id)}>{dt.name}</button>
                )
             })
           } 
          </div>
        </div>
    )
  }
  export default BucketTwo;