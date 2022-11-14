import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'

import { toast } from 'react-toastify';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { auth } from '../auth/firebase';

import { UserContext } from "../context/AuthContext"

function Navbar({loginSituation})
{
  const user = useContext(UserContext)



  const logout = async () =>
  {
    await signOut(auth)
    toast.success("Signout successful...", {
      position: toast.POSITION.TOP_RIGHT
    });
    localStorage.removeItem("searchedAdress");
     
  }

  return (
    <div>

      <nav className="navbar bg-primary">
        <a className="navbar-brand p-3 link-light " href="/">React<span className='link-warning'>Movie</span>App</a>
        <div>
          {user ? (
            <div>
              <label className='link-warning p-3'>{user?.displayName ? "Welcome " + user.displayName : user.email}</label>
              
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