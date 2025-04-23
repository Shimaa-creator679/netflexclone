import React, { useEffect, useRef, useState } from 'react'
import cards_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom'
import "./Titlecard.css"

const Titlecard = ({title,category}) => {
    const cardref=useRef()

    const[apidata,setapidata]=useState([])


    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDQ0NTBhODJiMmI2OGQ5NDc3OTliZDNhNjc5YTYzMSIsIm5iZiI6MTc0MDQ5NjQxMS42NDksInN1YiI6IjY3YmRkZTFiMGQxMTc1NzgzZjU5YTQwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P9fWimDzdXE8O10DlsMRZaJkrvWYj8Xo9iEUZm0qiZ0'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setapidata(res.results))
            .catch(err => console.error(err));

    },[category])

   const handlewheel=(event)=>{
    cardref.current.scrollLeft += event.deltaY
   }
    useEffect(()=>{

      cardref.current.addEventListener("wheel",handlewheel)
    },[])

  return (
    <div className='titlecard'   >
        <h2>{title}</h2>
        <div className='cardslist'  ref={cardref}  >
            {apidata.map((card,index)=>{

                return  <Link to={`/player/${card.id}`} className='card'  key={index} >
                

<img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}     ></img>

<p>{card.original_title}</p>
</Link>

             
            })}
        </div>
    </div>
  )
}

export default Titlecard