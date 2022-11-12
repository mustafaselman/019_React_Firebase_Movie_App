import { signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { auth } from '../auth/firebase';
import AuthContext from '../context/AuthContext';
import { UserContext } from "../context/AuthContext"

function Navbar({loginSituation})
{
  const user = useContext(UserContext)

  const[alertStatus,setAlertStatus]=useState(false)
  const[alertMessage,setAlertMessage]=useState("")


  const logout = async () =>
  {
    await signOut(auth)
    toast.success("Signout successful...", {
      position: toast.POSITION.TOP_RIGHT
    });
     
  }

  return (
    <div>

      <nav className="navbar bg-primary">
        <a className="navbar-brand p-3 link-light " href="/">React<span className='link-warning'>Movie</span>App</a>
        <div>
          {user ? (
            <div>
              <label className='link-warning p-3'>Welcome {user?.displayName ? user.displayName : user.email}</label>
              
              <button className="btn btn-outline-light m-1" onClick={logout}>Sign Out</button>
            </div>
          ) : (<div>
            <a href='/login' className="btn btn-outline-light m-1" type="button">Login</a>
            <a href='/register' className="btn btn-outline-light m-1 me-3" type="button">Register</a>
          </div>)


          }



        </div>
        



      </nav>


    </div>
  )
}

export default Navbar;