import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase-config";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="d-flex flex-column ">
      <h3 className="mt-5 text-center">Login</h3>
      <input
        className="form-control my-2 border-1 border-primary "
        placeholder="Email..."
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        className="form-control mb-3 border-1 border-primary"
        placeholder="Password..."
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <button 
        className="btn btn-primary fs-5" 
        onClick={login}
        > Login 
      </button>
      
      <div className="d-flex flex-column text-center mt-3 ">
        <a 
          href="/register" 
          className="text-decoration-none fs-5"
          > Register
        </a>
        <a 
          href="/forgot" 
          className="text-decoration-none fs-5"
          > Forgot Password?
        </a>
      </div>
      
    </div>
  );
};

export default Login;
