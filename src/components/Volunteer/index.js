import React from "react";
import VolunteerCard from "../VolunteerCard/Index";
import { VolunteerData } from "../../dummyData";
import VolunteerForm from "../VolunteerForm";
const Volunteer=()=>{
    console.log(VolunteerData)
    return(
        <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{flex:1}}>
            {
                VolunteerData.map((item,key)=>{
                    return(
                        <VolunteerCard item={item}/>
                    )
                   
                })
            }
            </div>
            <div style={{flexDirection:'row',paddingTop:50,flex:0.5}}>
            <VolunteerForm/>
            </div>
           
        </div>
        
       
    )

}

export default Volunteer