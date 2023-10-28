import "./style.css"
import DATA from "./DATA"
const CARD=()=>{
    return(
        <>
        <div className=" text-dark d-flex m-5 justify-content-between  flex-wrap " >
           { DATA.map((e)=>{
                return(
                    <>
                    <div className=" main bg-black d-flex mb-5 flex-column justufy-content-start">
                <img src={e.img} width={"100%"} />
                <h5>MovieName : { e.movieName}</h5>
                <h5>Language : {e.language}</h5>
                <h5>year : {e.year}</h5>
                <h5>genre : {e.genre}</h5>
                <h5>duration :{e.duration}</h5>


            </div>
                    </>
                )
            })
           }
        </div>
        
        
        
        </>

    )
}
export default CARD