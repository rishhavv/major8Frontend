import { Typography } from 'antd'
import React from 'react'

const FooterItem=({title,data})=>{
    data.map((item,key)=>{
        console.log("ite is ",item.value)
    })
    return(
        <div style={{flex:1,alignItems:'flex-start'}}>
            <Typography style={{fontSize:20 ,alignItems:'flex-start',color:'white'}}>
                {title}
            </Typography>
            <div style={{paddingTop:10}}>
                {
                    data.map((item,key)=>{
                        return(<Typography style={{color:'white'}}>
                            {item.value}
                            </Typography>
                        )
                        
                    })
                }
                
            </div>
        </div>
    )
}

export default FooterItem