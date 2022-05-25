import { InsertComment } from "@material-ui/icons";
import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const VolunteerCard=({item})=>{
    return(
       <div style={{padding :50,maxWidth:'75%'}}>
        <div style={{flexdirection:'row',display:'flex',padding:100,border:1,padding: 10,boxShadow:" 10px 10px 5px 0px rgba(0,0,0,0.75)",borderRadius:20}}>
            
            <div style={{paddingHorizontal:16}} > 
                <img src={item.url} width={100} height={100}></img>
            </div>

            <div style={{
                flexDirection:'column'
            }}>
            
            <div style={{marginLeft:16}}>
            <Typography style={{fontWeight:'bold',fontSize:25,color:'plum'}}>
                {item.title}
            </Typography>
            </div>
            

            <div style={{
                padding:16,
                maxWidth:500
            }}>
                <Typography>
                    {item.desc}
                </Typography>
            </div>

            <div style={{padding :16}}>
                <a href={item.link}>
                    <Typography style={{color:'blue'}}>
                        Read More...
                    </Typography>
                </a>
            </div>
            
            </div>
        </div>
        </div>
    )
}

export default VolunteerCard