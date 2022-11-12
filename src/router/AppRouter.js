import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from '../pages/Login'
import Main from '../pages/Main'
import MovieDetail from '../pages/MovieDetail'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'

function AppRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
               <Route path='/moviedetail' element={<PrivateRouter/>}>
                <Route path="" element={<MovieDetail/>}/>
                </Route>

            </Routes>




        </BrowserRouter>
    )
}

export default AppRouter