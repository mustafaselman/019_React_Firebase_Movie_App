import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {auth} from "../auth/firebase"
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const [loginEmail,setLoginEmail]=useState("");
  const [loginPassword,setLoginPassword]=useState("");
  
  
  
    
  
  const login = async () => {
    try{
       const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        toast.success('Login Successfully', {position: toast.POSITION.TOP_RIGHT})
       navigate("/");
    }
    catch(error){
      console.log(error.massage);
      toast.error("Not Valid Email or Password ...", {
        position: toast.POSITION.TOP_RIGHT
      });
      
    }
  }


 const signInWithGoogle = async () => {
  try{
    await signInWithPopup(auth, new GoogleAuthProvider())
    toast.success('Login Successfully', {position: toast.POSITION.TOP_RIGHT})
    navigate("/");
  }
  catch(error){
    console.log(error.message)
    toast.error("Sign in Google errors ...", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
 }
  const sendNewPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, loginEmail)
      console.log("message send")
      toast.success('Mail has been send for reset password to your email account...', {position: toast.POSITION.TOP_RIGHT})
    } 
    catch(error) {
      console.log(error.message)
      toast.error("Please enter email adress...", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }



  


  return (
    <div>
       <Navbar/>
        <div className=''>
          <img id="regimage" className="float-start mh-100 d-inline-block" src="https://picsum.photos/1600/900/" alt="pics"/>
          <div id="regdata" className='float-end'>
            <h1 className='my-5 form-label text-decoration-underline'>Login</h1>
            <h3 className='my-3 form-label'>E-mail</h3>
            <input className="form-control w-75" onChange={(event)=>{setLoginEmail(event.target.value)}} placeholder="Enter Your E-mail"/>
            <h3 className='my-3 form-label'>Password</h3>
            <input className="form-control w-75" onChange={(event)=>{setLoginPassword(event.target.value)}} placeholder="Enter Your Password"/>
            <br/>
            <button className="my-3 btn btn-primary w-50" onClick={sendNewPassword} >Forgot Your Password ?</button>
            <br/>
            <button className="my-3 btn btn-primary w-50" onClick={login}>Login</button> 
            <br/>
            <ToastContainer role="alert" />
            <button className="my-3 btn btn-primary w-50" onClick={signInWithGoogle}>Login with Google</button>
          </div>
      </div>
    </div>
  )
}

export default Login


