import axios from "axios";
import {useState }from "react";
import "./destination.css"

export default function Destination(){
  const[imageResult, setImageResult]=useState(null)
  const sumbitDestination=(event)=>{
    event.preventDefault();
    const country=event.target.country.value;
    const content=event.target.content.value;
    const price=event.target.price.value;
    const daytime=event.target.daytime.value;
  
    axios.post("https://asiman-final-default-rtdb.firebaseio.com/destination.json",{
      country:country,
      content:content,
      price:price,
      daytime:daytime,
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
    <div className="dorne_featured_destination">
      <div className="dorne_featured_destination_introduction">
        <h2>Dorne Featured Destination</h2>
      </div>
      <div className="destination_card">
        <form name="sentMessage" id="cardForm" onSubmit={sumbitDestination}>
          <div>
            <label>Country</label>
            <input type="text" className="card_input" placeholder="Country" id="country" required name="country" />
          </div>
          <div>
            <label>Content</label>
            <input type="text" className="card_input" placeholder="Content" id="content" required name="content"/>
          </div>
          <div>
            <label>Price</label>
            <input type="text" className="card_input" placeholder="Price" id="price" required name="price"/>
          </div>
          <div>
            <label>Day Time</label>
            <input type="text" className="card_input" placeholder="Night or Full Day" id="daytime" required name="daytime"/>
          </div>
          <div>
            <label>Image</label>
            <input type="file" name="file" onChange={(e)=>sendImage(e)}/>
          </div>
          <button type="submit" className="destination_btn" id="sendButton">Send</button>
        </form>
      </div>
    </div>
     </>

  );
}

