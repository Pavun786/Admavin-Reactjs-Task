import {useNavigate} from "react-router-dom";


function AllTasks(){

    const navigate = useNavigate()

    return(
        <div className="task-container">
         <h3>All tasks</h3>
         <div className="task-lists">
         <button onClick={()=>navigate("/element-transfer")}>Element Transfer</button>
         <button onClick={()=>navigate("/infinite-scroll")}>Infinite-Scroll</button>
         <button onClick={()=>navigate("/game")}>Mind game</button>
         <button onClick={()=>navigate("/nested-link")}>Nested-link</button>
         </div>
        </div>
    )
}
export default AllTasks;