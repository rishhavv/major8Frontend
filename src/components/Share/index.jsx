import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import { useState } from "react";
import axios from "axios";

export default function Share() {
  const [text,setText]=useState('')
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange=(e)=>{
    setText(e.target.value)
   // console.log("this is  ",text)

  }
  const handleSubmit=()=>{
    console.log("this is  ",text)
    axios.post('https://major8.herokuapp.com/major/community-add',{
      comment:0,
      like:0,
      userId:10,
      desc:text,
      photo:'',
      date:Date().toLocaleString()
    }).then((res)=>{
      console.log("response is ",res);
    })
  }
  const handleImageChange=(file)=>{
    console.log(file)
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind ?"
            name='name'
            value={text}
            className="shareInput"
            onChange={handleChange}
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    {/* <PermMedia htmlColor="tomato" className="shareIcon"/> */}
                    <input type="file"   onChange={(e) => handleImageChange(e.target.files) }/>
                    {/* <span className="shareOptionText">Photo or Video</span> */}
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" onClick={handleSubmit}>Share</button>
        </div>
      </div>
    </div>
  );
}