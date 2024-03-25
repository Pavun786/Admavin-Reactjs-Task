import { useEffect, useState } from "react";
import Card from "./Card";
import "../Components2/Card.css"

const PAGE_NUMBER = 1;

function CardList(){

    const [movieDetails,setMovieDetails] = useState([])
     const [page, setPage] = useState(PAGE_NUMBER);
    const [loading, setLoading] = useState(false);

    console.log(movieDetails)

    useEffect(()=>{
       fetchData()
    },[page])

     const fetchData = async()=>{
        const data = await fetch("https://63beea7df5cfc0949b64c464.mockapi.io/movies",{
            method : "GET"
        })
        const res = await data.json()
        setMovieDetails([...movieDetails,...res])
        setLoading(false);
     }

     useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const handleScroll = async () => {
 
        //document.documentElement.scrollHeight   //====> height of the HTML document, including the height of the content not visible within the viewport due to scrolling
        //document.documentElement.scrollTop      //====>it means the number of pixels that the document's content is currently scrolled vertically from the top
        //window.innerHeight       //====> the height of the viewport (the visible portion of the browser window) in pixels.
         
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    return(
        <div className="card-container">
         {movieDetails.map((ele)=>{
            return(
                <Card movie={ele}/>
            )
         })}
        <div className="loading">{loading && "Loading..."}</div>
        </div>
    )
}
export default CardList;