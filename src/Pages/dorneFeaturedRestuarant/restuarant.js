import axios from "axios";
import {useState }from "react";
import "./restuarant.css";
export default function Destination(){
  const[imageResult, setImageResult]=useState(null)
  const sumbitRestuarant=(event)=>{
    event.preventDefault();
    const foodname=event.target.foodname.value;
    const country=event.target.country.value;
    const score=event.target.score.value;  
    axios.post("https://asiman-final-default-rtdb.firebaseio.com/restuarant.json",{
      foodname:foodname,
      country:country,
      score:score,
      img:imageResult
    })
    .then((response)=>{
      event.target.reset();
    })
    .catch((error)=>{
      console.log(error);
    })
  };
  const sendImage=(event)=>{
    let files=event.target.files;
    let reader=new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload=(event)=>{
      setImageResult(event.target.result)
    }
  }

  return (
    <>
    <div className="dorne_featured_restuarant">
      <div className="dorne_featured_restuarant_introduction">
        <h2>Dorne Featured Restuarant</h2>
      </div>
      <div className="restuarant_card">
        <form name="sentMessage" id="cardForm" onSubmit={sumbitRestuarant}>
        <div>
            <label>Food Name</label>
            <input type="text" className="card_input" placeholder="Food Name" id="foodname" required name="foodname" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" className="card_input" placeholder="Country" id="country" required name="country" />
          </div>
          <div>
            <label>Score</label>
            <input type="text" className="card_input" placeholder="Score" id="score" required name="score"/>
          </div>
          <div>
            <label>Image</label>
            <input type="file" name="file" onChange={(e)=>sendImage(e)}/>
          </div>
          <button type="submit" className="restuarant_btn" id="sendButton">Send</button>
        </form>
      </div>
    </div>
     </>

  );
}

