import React from 'react'
import "./RowPoster.css"
import { useState , useEffect } from 'react'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../Constants/constants'
import Youtube from 'react-youtube'


function RowPoster(props) {
 const [moviesPoster , setMoviePoster] = useState([])
 const [trailer , setTrailer] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data )
      setMoviePoster(response.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
    
      autoplay: 1,
    },};

const handleMovieTrailer=(id)=>{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length !== 0){
      setTrailer(response.data.results[0])
    }
    else{
      console.log("array is empty")
    }
   
  })
}

return(

    <div className='row'>
        <h2 className='poster-title'>{props.title}</h2>
        <div className='posters'>
          {moviesPoster.map((obj)=>
          <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ? 'smallPosterimg':"posterimg"} src={`${imgUrl+obj.backdrop_path}`} alt="" />
          )}
        
        </div>
          {trailer && <Youtube videoId={trailer.key} opts={opts}/>}  
    </div>
  )
}

export default RowPoster