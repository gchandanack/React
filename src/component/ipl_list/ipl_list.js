

import Ipl_data from "../ipl_data/ipl_data";
const Ipl_List=()=>{
    const {name,source,trophy,c_name}=Ipl_data
    return(
        <>
                       <center><h1>IPL TEAMS</h1></center>

        {Ipl_data.map((eachIpl_data)=>(
            <center>
                <div style={{ border:"2px solid black", 
                            
                            
                    color:"black",padding:"20px" 
                    ,margin:"10px 500px",
                    background:"#ffcc99"}}>
                    <h3>{eachIpl_data.name}</h3>
                    <img src={eachIpl_data.source}  width={150} height={150}/>
                    <h3>Trophy: {eachIpl_data.trophy}</h3>
                    <h3>Captain name: {eachIpl_data.c_name}</h3>


                   
            </div>

            </center>
        )


       
) }
        </>
    )

}

export default Ipl_List;


