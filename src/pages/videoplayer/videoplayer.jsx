import React, { useEffect, useImperativeHandle, useState } from "react";
import backicon from "../../assets/back_arrow_icon.png";
import "./player.css"
import { useNavigate, useParams } from 'react-router-dom';
  
const Videoplayer = () => {
  const { id } = useParams();

  const[apidata,setapidata]=useState({})
  const nav=useNavigate();




 useEffect(()=>{

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDQ0NTBhODJiMmI2OGQ5NDc3OTliZDNhNjc5YTYzMSIsIm5iZiI6MTc0MDQ5NjQxMS42NDksInN1YiI6IjY3YmRkZTFiMGQxMTc1NzgzZjU5YTQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P9fWimDzdXE8O10DlsMRZaJkrvWYj8Xo9iEUZm0qiZ0'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapidata(res.results[0]))
    
    .catch(err => console.error(err));
 
 },[id])
 console.log(apidata)
 
  return (
    <div className="player">
      <img src={backicon} onClick={()=>{nav("/")}}></img>
      <iframe
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="trailer"
        allowFullScreen
        frameBorder={0}>
        {" "}
      </iframe>
      <div className="info">
        <h1>{apidata.puplished_at}</h1>
        <h1>{apidata.name}</h1>
        <h1>{apidata.type}</h1>
      </div>
    </div>
  );
};

export default Videoplayer;
