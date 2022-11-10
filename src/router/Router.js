import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from '../pages/Login'
import Main from '../pages/Main'
import MovieDetail from '../pages/MovieDetail'
import Register from '../pages/Register'

function Router()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
               {/* <Route path='/moviedetail' element={}>
                <Route path="" elent={<MovieDetail/>}/>
                </Route>
              */}
            </Routes>




        </BrowserRouter>
    )
}

export default Router