import React from 'react';
import "./Banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect ,useState } from 'react';
import axios from "../../axios";
import {API_KEY,imgUrl} from "../../Constants/constants"

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() =>{
    console.log("first")
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
    setMovie(response.data.results[randomIndex]);
    })
  },[])
  

  return (
   
    <div style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ""})`}} className='banner'>
      
      <div className="content">
        <h1 className='title'>{movie ? movie.title || movie.name : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play  <FontAwesomeIcon icon={faPlay} /></button>
          <button className="button">My list</button>
        </div>
        <p className='description'>{movie ? movie.overview : ""}</p>
      </div>
      <div className='fade'></div>
    </div>
  );
}
export default Banner;
