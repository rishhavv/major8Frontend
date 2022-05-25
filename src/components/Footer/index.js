import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../../image/8.png'
import FooterItem from "../FooterItem";

const Footer=()=>{
    const PetArena=[
        {
            value:'Questions'
        },
        {
            value:'Help'
        }
    ]
    const Company=[
        {
            value:'About',
            link:'about'
        },
        {
            value:'Legal',
            link:''
        },
        {
            value:'Privacy Policy',
            link:''
        },
        {
            value:'Terms Of Service',
            link:''
        },
        {
            value:'Contact Us',
            link:''
        },

    ]
    return(
        <div style={{
            height:300,
            backgroundColor:'black',
        }}>
            <div style={{padding:20, flexDirection:'row',display:'flex'}}>
               
               <div style={{flex:1}}>
                   {/*company logo */}
                   <img src={logo} width={100} height={100} /> 
               </div>
                <div style={{flexDirection:'row',flex:3,display:'flex'}}>
                <FooterItem title={'Pet Arena'} data={PetArena}/>
                <FooterItem title={'Company'} data={Company}/>
                {/* <FooterItem/>
                <FooterItem/> */}
                <div style={{flexDirection:'row',display:'flex',}}>
                <Typography style={{padding:5,color:'white'}}>Instagram</Typography>
                <Typography style={{padding:5,color:'white'}}>Facebook</Typography>
                <Typography style={{padding:5,color:'white'}}>Blog</Typography>
                <Typography style={{padding:5,color:'white'}}>Twitter</Typography>
                
                </div>
                
                </div>

                
               </div>
            
        </div>
    )

}

export default Footer