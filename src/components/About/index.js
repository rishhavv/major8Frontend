import { Typography,Image } from "antd";
import React from "react";
import img from '../../image/3.jpeg'
import img2 from '../../image/6.avif'
import Footer from "../Footer";
const styles={
    background:{
        backgroundImage:`url(${img})`,
        backgroundPositionX:'-150px',
        backgroundPositionY:'-150px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'100vw',
        height:'100vh',

    },
    text1:{
        fontFamily:'Open Sans',
        fontSize:'35px',
        color:'black',
        flex:1
    },
    text2:{
        fontFamily:'Open Sans',
        fontSize:'20px',
        color:'black',
        flex:1
    },
    text3:{
        fontFamily:'Open Sans',
        fontSize:'20px',
        color:'black',
        flex:1
    },
    text4:{
        fontFamily:'Open Sans',
        fontSize:'16px',
        color:'black',
        flex:1,
        paddingLeft:20
    }
}

export const About=()=>{
    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={styles.background}>
                <div style={{padding:40,width:750,justifyItems:'center'}}>
                    <Typography style={styles.text1}>
                        About PetArena
                    </Typography>
                    <Typography style={styles.text2}>
                      
                    </Typography>
                    <Typography style={styles.text3}>
                        Founded in 2022
                    </Typography>
                </div>
            </div>
            <div style={{display:'flex'}}>
            <div style={{flex:1,padding:40,width:750,justifyItems:'center',}}>
                <Typography style={styles.text4}>
                    Did you know keeping a pet can keep stress hormones cortisol and high BP at bay?{<br/>}

                There's so much these selfless creatures do for us but what can we do for them?{<br/>}
                This is why Pet Arena took the initiative to connect you to your furry friend in the most convinient way ever.Not only do we provide
                these shelter seeking annimals with new and warm homes but also help them unify the ones that unfortunately lost one through a 'find your pet' forum.{<br/>}

                To promote more positivity and enthusiasm, we even enable adopters to share heart warming photos and videos of their adoable friends
                
                Pet Arena envisions to provide every homeless animals with a loving family, and every lonely soul with an adorable pet{<br/>}
                </Typography>
            </div>
                <Image style={{padding :10,height:'65vh',}} src={img2}/>

            </div>
           <Footer/>
        </div>
    )
}
export default About