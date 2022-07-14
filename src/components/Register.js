import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {auth } from './utils/firebaseConfig'

const Register = () => {
  const [registerEmail , setRegisterEmail] = useState("");
  const [registerPassword , setRegisterPassword] = useState("");

  const register  = async ()=>{
    
    try { 
      const user =  await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
        
        );
      console.log(user);
    } catch(error){
      console.log(error.message);
    }
  
  };

  return (
        <div>
            <h3 className="mt-5"> Register user </h3>
            <input placeholder="Email..." onChange={(event)=>{
              setRegisterEmail(event.target.value)
              
            }}
              />
            <input placeholder="Password..." 
            onChange={(event)=>{
              setRegisterPassword(event.target.value)
              
            }}
            />

            <button onClick={register}> Create User </button>
            <a href="/">Login</a>
        </div>
  )
}

export default Register