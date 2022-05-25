import Post from "../Post/index";
import Share from "../Share/index";
import { useState } from "react";
import "./feed.css";
// import { Posts } from "../../dummyData";
import { useEffect } from "react";
import axios from "axios";

export default function Feed() {
  const [show,setShow]=useState(false)
  const [d,setd]=useState([]);
  let Posts=[]

  useEffect(()=>{
     axios.get('https://major8.herokuapp.com/major/community-add').then(res=>{
      return res.data
    }).then((data)=>{
      console.log(data)
      Posts=data.data
      console.log("Posts ,",Posts)
      setd(Posts)
    }).then(()=>{
      
      setShow(true)
    })
  },[])

  return (

    <>
    {
    show?(<div className="feed">
    <div className="feedWrapper">
      <Share />
      {d&& d.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
    </div>):(null)

  }
  </>
    
  );
}