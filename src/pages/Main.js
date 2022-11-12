import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

const apikey = process.env.REACT_APP_APIKEYMOVIEDB
const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}`
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=`

function Main() {
    const [formSearch,setFormSearch] = useState("")
    const[filmArray,setFilmArray] = useState([])
    const[error,setError]= useState("")
    
    const getFilm = async (URL) => {
        try{
          const film = await axios(URL)
        setFilmArray(film.data.results)
        } catch (error) {
          setError(error.message)
        }
    }
   
    useEffect(()=>{
    getFilm(URL);
   
    },[])


    const handleSubmit = (e) => {
      e.preventDefault();
      if (formSearch) {
        getFilm(searchURL + formSearch)
        
      }else{
        toast.warn("Invalid search query. please try again !..", {
          position: toast.POSITION.TOP_RIGHT
        });
  
      }
    }
  return (
    <div>
      <Navbar/>
     <div className='my-3'>
      <br/>
      <div className='container position-relative '>
      <form onSubmit={handleSubmit} className="d-flex w-50 position-absolute top-40 start-50 translate-middle" role="search">
      <input value={formSearch} onChange={(e)=> setFormSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Whats your favoruite film?" aria-label="Search"/>
      <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      </div>

    </div>
    <MovieCard filmArray={filmArray}/> 
    
    
        </div>
      
          
    
  )
}

export default Main


