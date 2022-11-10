import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
  return (
    <div>

  <nav class="navbar bg-primary">
  <a className="navbar-brand p-3 link-light " href="/">React<span className='link-warning'>Movie</span>App</a>
  <div>
     <button class="btn btn-outline-light m-1" type="button">Login</button>
    <button class="btn btn-outline-light m-1 me-3" type="button">Register</button>
  </div>
   
   
  
</nav>


    </div>
  )
}

export default Navbar