import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import "./MovieCard.css"
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

function MovieCard({filmArray}) {
  
  const navigate = useNavigate();
  const user = useContext(UserContext);
  
 return(
    <div>
        <br/>
        <div className='d-flex justify-content-center flex-wrap'>
    {
        filmArray?.map((film)=>{
           
            return (
           <div  key={film.original_title} className="card m-2" style={{width:'18rem'}}>
             <div id="mainContainer" className="position-relative">
              <img src={`https://image.tmdb.org/t/p/w1280${film.poster_path}`} className="card-img-top" alt="filmposter"/>
              <div id="container" className='position-absolute'>
              <div id="text" className='card-text'>{film.overview}</div>
              <button id="button" type="button" className="btn btn-primary" onClick={()=> {
                if(!user)
                toast.warn("Firstly you must login", {position: toast.POSITION.TOP_RIGHT})
                navigate("/moviedetail",{ state: film})
              }
             }>DETAILS</button>
             </div>
             </div>
             
             <div className="card-body">
               <b className="card-text">{film.original_title}</b>
               {user && <div className='container bg-primary border-top rounded-pill text-warning'>{film.vote_average.toFixed(1)}</div>}
             </div>
             
           </div>
           
            )
           
           
           })
    }
    </div>
    </div>
 )
    
        
 
    



        
  
 
}

export default MovieCard