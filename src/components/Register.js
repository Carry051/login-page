import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase-config";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="text-center d-flex flex-column">
      <h3 className="mt-5"> Register user </h3>
      <input
        className="form-control my-2 border-1 border-primary"
        placeholder="Email..."
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <input
        className="form-control my-2 border-1 border-primary mb-3"
        placeholder="Password..."
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />

      <button 
        onClick={register} 
        className="btn btn-primary fs-5 mb-3"
        > Create User 
      </button>
      <a 
        href="/" 
        className="text-decoration-none fs-5"
        > Back
      </a>
    </div>
  );
};

export default Register;
