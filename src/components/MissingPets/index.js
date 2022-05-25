import React, { useEffect,useState } from "react";  
import MissingHeader from '../MissingHeader'
import { MissingPetsData } from "../../dummyData";
import PetItem from "../PetItem";
import axios from "axios";
const MissingPets=()=>{
    const [show,setShow]=useState(false)
    const [d,setd]=useState([]);
    useEffect(()=>{
        axios.get('https://major8.herokuapp.com/major/report-missing').then(res=>{
         return res.data
       }).then((data)=>{
         console.log(data)
         let Posts=data.data
         console.log("Posts ,",Posts)
         setd(Posts)
       }).then(()=>{
         
         setShow(true)
       })
     },[])
    return(
        <div style={{display:'flex',flexWrap:'wrap',padding:16,flexDirection:'column'}}>
            <MissingHeader/>
            <div style={{flexDirection:'row',display:'flex'}}>
            {d.map((item,key)=>{
                return(<>
                {
                    show?(
                        <div style={{padding:16}}>
                        <PetItem url={item.url} name={item.name} desc={item.desc} isMissing={item.isMissing}></PetItem>
                       </div>
                       ):(null)
                }
                    </>
                    

                )
            })}
            </div>
           
        </div>
    )
}

export default MissingPets