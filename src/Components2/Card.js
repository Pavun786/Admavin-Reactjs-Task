import "../Components2/Card.css"

function Card({movie}){

    return(
       
        <div className="card">
         <img src={movie.poster}/>
         <h3>{movie.name}</h3>
         <p>{movie.summary}</p>
        </div>
        
    )
}
export default Card;