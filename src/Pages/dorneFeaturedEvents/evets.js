import axios from "axios";
import {useState }from "react";
import "./events.css"

export default function Events(){
  const[imageResult, setImageResult]=useState(null)
  const sumbitEvents=(event)=>{
    event.preventDefault();
    const title=event.target.title.value;
    const author=event.target.author.value;
    const content=event.target.content.value;
    const date=event.target.date.value;
  
  
    axios.post("https://asiman-final-default-rtdb.firebaseio.com/event.json",{
      title:title,
      author:author,
      content:content,
      date:date,
      img:imageResult,
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
    <div className="dorne_featured_events">
      <div className="dorne_featured_events_introduction">
        <h2>Dorne Featured Events</h2>
      </div>
      <div className="events_card">
        <form name="sentMessage" id="cardForm" onSubmit={sumbitEvents}>
          <div>
            <label>Title</label>
            <input type="text" className="card_input" placeholder="Title" id="title" required name="title" />
          </div>
          <div>
            <label>Author</label>
            <input type="text" className="card_input" placeholder="Author" id="author" required name="author"/>
          </div>
          <div>
            <label>Content</label>
            <textarea name="content" id="content" className="content_text" placeholder="Content"></textarea>
          </div>
          <div>
            <label>Author</label>
            <input type="text" className="card_input" placeholder="Date" id="date" required name="date"/>
          </div>
          <div>
            <label>Image</label>
            <input type="file" name="file" onChange={(e)=>sendImage(e)}/>
          </div>
          <button type="submit" className="events_btn" id="sendButton">Send</button>
        </form>
      </div>
    </div>
     </>

  );
}

