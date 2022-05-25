import { CodepenOutlined, IeCircleFilled } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import ListOptions from "../ListOptions";
import PetItem from "../PetItem";
import {Pets} from '../../dummyData'

const location=[
    {

        "label": "Mumbai",
        "value": "Mumbai"
    },
    {

        "label": "Delhi",
        "value": "Delhi"
    },
    {
        "label": "Amritsar",
        "value": "Amritsar"
    },
    {

        "label": "Raipur",
        "value": "Raipur"
    },
    {

        "label": "Allahabad",
        "value": "Allahabad"
    },
    {
     
        "label": "Coimbatore",
        "value": "Coimbatore"
    },
    {
      
        "label": "Jabalpur",
        "value": "Jabalpur"
    },
    {
     
        "label": "Gwalior",
        "value": "Gwalior"
    },
    {
        
        "label": "Vijayawada",
        "value": "Vijayawada"
    },
    {

        "label": "Madurai",
        "value": "Madurai"
    },
    {

        "label": "Guwahati",
        "value": "Guwahati"
    },
    {

        "label": "Chandigarh",
        "value": "Chandigarh"
    },
    {

        "label": "Hubli-Dharwad",
        "value": "Hubli-Dharwad"
    },
    {
        "label": "Amroha",
        "value": "Amroha"
    },
    {

        "label": "Moradabad",
        "value": "Moradabad"
    },
    {

        "label": "Gurgaon",
        "value": "Gurgaon"
    },
    {

        "label": "Aligarh",
        "value": "Aligarh"
    },
    {
        "label": "Solapur",
        "value": "Solapur"
    }
]
const options = [
    {
      value: 'Dogs',
      label: 'Dogs',
      children: [
        {
         label:"Labrador Retriever",
         value:"Labrador Retriever",
        },{
         label:"German Shepard",
         value:"German Shepard",
        },
         {
          value:"Golden Retriever",
         label:"Golden Retriever",
        },
        {
          value:"French Bulldog",
         label:"French Bulldog",
        },
        {
          value:"Bulldog",
         label:"Bulldog",
        },
        {
          value:"Beagle",
         label:"Beagler",
        }
      ],
    },
    {
      value: 'Cats',
      label: 'Cats',
      children: [
        {
          value:   "Abyssinian",
          label: 'Abyssinian',
        },
        {
          value: "Aegean",
          label: 'Aegean',
        },
        {
          value:  "American Curl",
          label: 'American Curl',
        },
        {
          value:   "Himalayan",
          label: 'Himalayan',
        },
        {
          value:   "Cyprus",
          label: 'Cyprus',
        }
      ],
    },
];
  
const styles={
    filterContainer:{
        padding:10,
        display:'flex',
        justifyContent:'center',
    }
}

export const Adopt=()=>{
    const [Show,setShow]=useState(false)
    const [Data,setData]=useState([])
    const [selectedBreed,setBreed]=useState('')
    const [selectedCategory,setCategory]=useState('')
    
    var urls=[]
    const CTA=(event)=>{
        console.log("button clicked",event)
        setShow(true)
    }
    
    const handleCTA=(value)=>{
        console.log("cta triggered",value)

        setCategory(selectedCategory);
        setBreed(selectedBreed);
    }
    useEffect(()=>{
        if(Show){
            console.log("this is ex")
            fetch('https://api.TheDogAPI.com/images/search?breed_id=1').
            then((res)=>{
                if(res.ok){
                    console.log("res",res.json())
                    return res.json()
                }
            }).
            then((data)=>{
                console.log(data)
                setData(data)
            }).catch((e)=>{
                console.log("error  -> ",e)
            })
         }

    },[Show])


    return (
        <div>
            <div style={styles.filterContainer}>
                <div style={{display:'flex'}}>
                    <Typography style={{padding:10}}>
                        Animal
                    </Typography>
                    <ListOptions data={options}></ListOptions>
                </div>
                <div style={{display:'flex'}}>
                    <Typography style={{padding:10}}>
                        Location
                    </Typography>
                    <ListOptions data={location} selectedBreed={selectedBreed} selectedCategory={selectedCategory} handlePress={handleCTA} ></ListOptions>
                </div>
                <Button onClick={CTA}>search</Button> 
            </div>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {Show?(
                    // Data.filter(pet=>pet.category==selectedCategory && pet.breed==selectedBreed).map((item,key)=>{
                        Pets.map((item,key)=>{
                        console.log(item.url)
                        return(
                            <div style={{padding:16}}>
                                <PetItem url={item.url} name={item.name} desc={item.desc} isMissing={item.isMissing}></PetItem>
                            </div>
                        
                        )
                    })
                ):(null)}
            </div>
            
        </div>
        
    )

}