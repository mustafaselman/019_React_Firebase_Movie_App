import React, { useState } from 'react'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../auth/firebase"
import Navbar from '../components/Navbar';
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Register() {

  const [registerEmail,setRegisterEmail]=useState("");
  const [registerPassword,setRegisterPassword]=useState("");
  const [registerFirstName,setRegisterFirstName]=useState("");
  const [registerLastName,setRegisterLastName]=useState("");

  const navigate = useNavigate();
  const register = async () => {
    try{
       const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
       updateProfile(auth.currentUser, {
        displayName: registerFirstName + " " + registerLastName
       })
       console.log(user)
       toast.success("Register successfully...", {
        position: toast.POSITION.TOP_CENTER
      });
       navigate("/")
       
    }
    catch(error){
      console.log(error.massage);
      toast.success("Fill all blanks for register..", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  return (
    <div>
      <Navbar/>
        <div className=''>
          <img id="regimage" className="float-start mh-100 d-inline-block" src="https://picsum.photos/1600/900/" alt="pics"/>
          <div id="regdata" className='float-end'>
            <h1 className='my-5 form-label text-decoration-underline'>Register</h1>
            <h3 className='my-3 form-label'>First Name</h3>
            <input className="form-control w-75" onChange={(event)=>{setRegisterFirstName(event.target.value)}} placeholder="Enter Your First Name"/>
            <h3 className='my-3 form-label'>Last Name</h3>
            <input className="form-control w-75" onChange={(event)=>{setRegisterLastName(event.target.value)}} placeholder="Enter Your Last Name"/>
            <h3 className='my-3 form-label'>E-mail</h3>
            <input className="form-control w-75" onChange={(event)=>{setRegisterEmail(event.target.value)}} placeholder="Enter Your E-mail"/>
            <h3 className='my-3 form-label'>Password</h3>
            <input className="form-control w-75" onChange={(event)=>{setRegisterPassword(event.target.value)}}placeholder="Enter Your Password"/>
            <button className="my-3 btn btn-warning" onClick={register}>Register</button> 

          </div>
        </div>

    
    </div>
  )
}

export default Register