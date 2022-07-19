import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase-config';


const ForgotPass = () => {
   
  const [email, setEmail] = useState('')
  


  const triggerResetEmail = async () => {
      await sendPasswordResetEmail (auth, email);
      console.log("Password reset email sent")
    }
    
  const handleSubmit = e => {
      e.preventDefault();
    };
    
   

      
    
      
    return (
    <div className="d-flex flex-column" >
      <h1 className="text-primary my-3">Forgot Password</h1>
      <h4
        className="text-center"
        >Enter your email here 
        <span 
          className="fs-3"
          > &#128071;
        </span>
      </h4>
      
      <input 
        placeholder="Email..."
        className="form-control"
        onChange={e => setEmail(e.target.value)}
      />
      <button 
        className="btn btn-primary px-5 my-3 " 
        onSubmit = {handleSubmit}
        onClick ={triggerResetEmail}
        
        >Send
      </button>
      <a href="/login" className="text-decoration-none text-center fs-4">Back</a>
    </div>
  )
    
    
}

export default ForgotPass