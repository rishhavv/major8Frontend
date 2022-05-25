import React ,{useEffect,useState} from "react"
import { DrawerNavigator } from "../DrawerNavigator"

import 'antd/dist/antd.min.css'
import { Carousel ,Image, Typography} from 'antd';
import icon from '../../image/dog-house.png'
import icon2 from '../../image/7.png'
import icon3 from '../../image/8.png'
import CarouselItem from "../CarouselItem";
import { MissingPetsData } from "../../dummyData";
const styles={
    carouselContainer:{
        width:'100%',
        textAlign:'center',
        backgroundColor:'black'
    },
    contentStyle :{
        color: '#fff',
        lineHeight: '300px',
        textAlign: 'center',
        background: '#364d79',
        width:'100%'
      },
      followingbar:{
          width:'100%',
          height:'20%',
      },
      drawernavigator :{
          paddingLeft:'0px',
          
      },
      carousel:{
          paddingLeft:'20px'
      },
      workflowContainer:{
       flex:3,
       padding:10
    },
      typography:{
       textAlign:'center',
       padding:10,
       backgroundColor:'#A8A8A8'
      },
      text1:{
        fontFamily:'Open Sans',
        fontSize:'35px',
        color:'black',
        flex:1
    },
}
const FeaturedPets=({Data})=>{
    return(
        // <div style={styles.carouselContainer}>
             <Carousel autoplay={true}>
             {Data.map((item,key)=>{
                 console.log("ute",item.url)
                 return(
                     <CarouselItem url={item.url} ></CarouselItem>
                 )
                    })}
            </Carousel>
        // </div>
       
    )
}

export const Home=()=>{
    const [Data,setData]=useState([])
    const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);

const [status, setStatus] = useState(null);
const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
    useEffect(()=>{ 
            console.log("this is ex")
            fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=8&').
            then((res)=>{
                if(res.ok){
                    return res.json()
                }
            }).
            then((data)=>{
                console.log(data)
                setData(data)
            })


    },[])
    return(
        <div style={{display:'flex',flexDirection:'column',backgroundColor:'white'}}>
            <div style={styles.typography}>
                    <Typography style={styles.text1}>
                        Your Journey with Pet Arena
                    </Typography>
                </div>
            
            <div style={styles.followingbar}>
                <div style={styles.drawernavigator}><DrawerNavigator/></div>
            </div>
            {/* carousel for featured pets */}
            <div style={styles.carouselContainer}>
            <FeaturedPets Data={MissingPetsData} style={styles.carousel}/>  
            </div>
            <div className="App">

            <div style={styles.workflowContainer}>
                
                <div style={{display:'flex',padding:50}}>
                    <div style={{padding:10}}> {/* dog image div with flex*/}
                        <Image src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg" width={500} height={500}></Image>
                    </div>
                    <div style={{padding:100}}>
                        <div style={{display:'flex',padding:20}}>{/* one icons component */}
                            <Image src={icon2} height={50} width={50}></Image>
                            <div>
                            <Typography style={{paddingLeft:40,fontFamily:'Open Sans',fontWeight:'bold',fontSize:20}}>Search pet</Typography>
                            <Typography style={{paddingLeft:40}}>Select animal and breed to begin your search</Typography>
                            </div>
                        </div>
                        <div style={{display:'flex',padding:20}}>{/* one icons component */}
                            <Image src={icon} height={50} width={50}></Image>
                            <Typography style={{paddingLeft:40,fontFamily:'Open Sans',fontWeight:'bold',fontSize:20}}>Adopt Love </Typography>
                        </div>
                        <div style={{display:'flex',padding:20}}>{/* one icons component */}
                            <Image src={icon3} height={50} width={50}></Image>
                            <div>
                            <Typography style={{paddingLeft:40,fontFamily:'Open Sans',fontWeight:'bold',fontSize:20}}>Vet Consultation</Typography>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </div>
             <div style={{padding:20,borderRadius:10}}>
                {/* <Typography style={{flex:1}}>
                    {"Get Location"}
                </Typography> */}
                <button onClick={getLocation}>Get Location</button>
            </div> 
            
  {/* <h1>Coordinates</h1>
  <p>{status}</p>
  {lat && <p>Latitude: {lat}</p>}
  {lng && <p>Longitude: {lng}</p>} */}
</div>
            
        </div>
           
    )
}

export default Home