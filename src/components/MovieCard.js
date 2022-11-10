import React, { useEffect, useState } from 'react'
import axios from 'axios'


function MovieCard({filmArray}) {
   
 return(
    <div>
        <br/>
        <div className='d-flex justify-content-center flex-wrap'>
    {
        filmArray?.map((film)=>{
           
            return (
           <div key={film.original_title} className="card m-2" style={{width:'18rem'}}>
             <img src={`https://image.tmdb.org/t/p/w1280${film.poster_path}`} className="card-img-top" alt="filmposter"/>
             <div className="card-body">
               <b className="card-text">{film.original_title}</b>
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