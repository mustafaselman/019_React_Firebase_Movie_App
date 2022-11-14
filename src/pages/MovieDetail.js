import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';
import YouTube from 'react-youtube';

const apikey = process.env.REACT_APP_APIKEYMOVIEDB;

function MovieDetail() {
  const location = useLocation();
  const film = location.state;
  const navigate = useNavigate();
  const videoURL =`https://api.themoviedb.org/3/movie/${film.id}/videos?api_key=${apikey}`;
  const [video,setVideo] = useState([])

  const getFilm = async (videoURL) => {
    try{
      const getfilm = await axios(videoURL)
      const trailerFunc = (result) => result.name.match("Official Trailer")
      setVideo(getfilm.data.results.filter(trailerFunc));
 
    } catch (error) {
     
      console.log(error.message)
  
    }
    
}


useEffect(()=>{
  getFilm(videoURL);
 
  },[])

  return (
    <div>
      <Navbar/>
      <h1 className='m-3'>{film.original_title}</h1>
      {
        video?.map(trailer => <YouTube id="youtubePlayer" key={trailer.key} videoId={trailer.key} />)
      }
      
<div className="card mb-3 container"  >
  <div className="row">
    <div className="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w1280${film.poster_path}`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Film Review</h5>
        <p className="card-text">{film.overview}</p>
        <p className="card-text">Release Date : {film.release_date}</p>
        <p className="card-text">Rate : {film.vote_average}</p>
        <p className="card-text">Total Vote : {film.vote_count}</p>
        <button onClick={()=> navigate(-1)} type="button" className="btn btn-primary">Go back</button>
      </div>
    </div>
  </div>
</div>
</div>

    
  )
}

export default MovieDetail