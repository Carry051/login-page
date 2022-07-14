import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {auth } from './utils/firebaseConfig'
const Login = () => {
    const [loginEmail , setLoginEmail] = useState("");
    const [loginPassword , setLoginPassword] = useState("");
    
  const login = async ()=>{
        try { 
          const user =  await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword);
          console.log(user);
        } catch(error){
          console.log(error.message);
        }
      
      };
  return (
    <div>
        <h3 className="mt-5">Login</h3>
        <input placeholder="Email..." 
        onChange={(event)=>{
        setLoginEmail(event.target.value)
        
        }}
        />
        <input placeholder="Password..." 
        onChange={(event)=>{
        setLoginPassword(event.target.value)
        
        }}
        />
        <button onClick={login}> Login </button>
        <a href="/register">Register</a>
       

       
    
    </div>
  )
}

export default Login