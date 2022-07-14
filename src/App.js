// import React, { useEffect, useState } from 'react';

  

// import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
// import Register from './components/Register';
import Routing from './components/Routing';


    

const App = () => {
  
  // const [registerEmail , setRegisterEmail] = useState("");
  // const [registerPassword , setRegisterPassword] = useState("");
  
  // const [loginEmail , setLoginEmail] = useState("");
  // const [loginPassword , setLoginPassword] = useState("");

  // const [user,setUser] = useState({}); 


  

  // useEffect(() => {

  //   onAuthStateChanged(auth, (currentUser) => {

  //       setUser(currentUser);

  //   });
  // },[])


  // const register  = async ()=>{
    
  //   try { 
  //     const user =  await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
        
  //       );
  //     console.log(user);
  //   } catch(error){
  //     console.log(error.message);
  //   }
  
  // };

  // const login = async ()=>{

  //   try { 
  //     const user =  await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword);
  //     console.log(user);
  //   } catch(error){
  //     console.log(error.message);
  //   }
  
  // };

  // const logout = async ()=>{
  //     await signOut(auth);
  // };

  
  
  return (
      <div className ="App">
        <div className="d-flex justify-content-center flex-column align-items-center " >
          
           <BrowserRouter>
            <Routing/>
           </BrowserRouter>
            {/* <h3 className="mt-5"> Register user </h3>
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
           */}
          
        
         
          
            {/* <h3 className="mt-5">Login</h3>
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
            <button onClick={login}> Login </button> */}
          
          

          

            {/* <h4 >User Logged In:</h4>
            {user ? user.email : "Not Logged In"}

            <button onClick={logout}>Sign Out</button>
         */}
        </div>
      </div>
  )
};

export default App;

