import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import lostpet from '../../image/12.jpeg'
import search from '../../image/search.jpeg'
const MissingHeader=({})=>{
    return(
        <div style={{flexDirection:'row',display:'flex',flex:1,backgroundColor:'beige',borderRadius:10}}>

        <div style={{flexDirection:'column',padding:20,flex:1}}>
            <div style={{flex:1}}>
            <Typography style={{fontSize:30,color:'#0B0D78'}}>
                We help reunite lost pets with their families
            </Typography>
            <Typography style={{fontSize:20,color:'#0B0D78'}}>
                Enter a photo of your missing pet and search our lost and found database
            </Typography>
            </div>
            <div style={{paddingTop:50,paddingLeft:20}}>
                <Link to="/ReportMissing">
                 <div style={{backgroundColor:'orange',width:100,height:100,alignItems:'center',borderRadius:10}}>
                     <img src={search} width={100} height={100} style={{objectFit:'cover'}}></img>
                
                        <Typography style={{alignSelf:'center'}}>
                            Lost a pet?
                        </Typography>      
                </div>
                </Link>
         </div>
        </div>
        

   

        <div style={{flex:2}}>
                <img src={lostpet} style={{objectFit:'fill'}}></img>
            </div>
    </div>
    )
}

export default MissingHeader