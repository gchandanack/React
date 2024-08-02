

import Ipl_data from "../ipl_data/ipl_data";
import "./ipl.css"
const Ipl_List=()=>{
    const {name,source,trophy,c_name}=Ipl_data
    return(
        <>
        <div className="nav">
            <h3>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        </h3>
        </div>
                       <center><h1>IPL TEAMS</h1></center>
<div className="box">
        {Ipl_data.map((eachIpl_data)=>(
            <center>
                <div className="cards">
                    <h3>{eachIpl_data.name}</h3>
                    <img src={eachIpl_data.source}  width={150} height={150}/>
                    <h3>Trophy: {eachIpl_data.trophy}</h3>
                    <h3>Captain name: {eachIpl_data.c_name}</h3>


                   
            </div>


            </center>
        )


       
) }
        <div className="footer">
            <h3>Copyrights by Chandana & co - 1999</h3>
            <h3>Private policy</h3>
            </div>

</div>
        </>
    )

}

export default Ipl_List;


