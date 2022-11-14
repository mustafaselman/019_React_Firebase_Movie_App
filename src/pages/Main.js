import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';

const apikey = process.env.REACT_APP_APIKEYMOVIEDB
const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}`
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=`

function Main() {
    const [formSearch,setFormSearch] = useState("")
    const[filmArray,setFilmArray] = useState([])
    const[error,setError]= useState("")
    const navigate = useNavigate();
    const user = useContext(UserContext);
    
    const getFilm = async (URL) => {
        try{
          const film = await axios(URL)
        setFilmArray(film.data.results)
        } catch (error) {
          setError(error.message)
        }
    }
   
    useEffect(()=>{
      if(localStorage.getItem("searchedAdress"))
      getFilm(localStorage.getItem("searchedAdress"))
      else
      getFilm(URL);
   
    },[])


    const handleSubmit = (e) => {
      e.preventDefault();

      if(user){
        if (formSearch) {
        getFilm(searchURL + formSearch)
        localStorage.setItem("searchedAdress", searchURL + formSearch)
      }else{
        toast.warn("Invalid search query. please try again !..", {
          position: toast.POSITION.TOP_RIGHT
        });
      }}
      else{
        toast.warn("Firstly you must login", {position: toast.POSITION.TOP_RIGHT})
        navigate("/login")
      }
      
    }
  return (
    <div>
      <Navbar/>
     <div className='my-3'>
      <br/>
      <div className='container position-relative '>
      <form onSubmit={handleSubmit} className=" mt-1 d-md-flex w-75 position-absolute top-40 start-50 translate-middle" role="search">
      <input className="flex-fill p-2 form-control me-2" value={formSearch} onChange={(e)=> setFormSearch(e.target.value)} type="search" placeholder="Whats your favoruite film?" aria-label="Search"/>
      <button className=" btn btn-outline-primary mt-1" type="submit">Search</button>
      </form>
      </div>

    </div>
    <MovieCard filmArray={filmArray}/> 
    
    
        </div>
      
          
    
  )
}

export default Main


