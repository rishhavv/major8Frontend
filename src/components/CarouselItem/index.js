import {Image} from "antd";
import React from "react";

const styles={
    background:{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'100%',
        height:'auto',
    }
}

export const CarouselItem=({url})=>{
    return(
        <div style={styles.background}> 
            <Image src={url}></Image>
        </div>
        
    )
}

export default CarouselItem