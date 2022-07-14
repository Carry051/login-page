import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Context } from '..'
import Login from './Login'
import Logout from './Logout'
import {useAuthState} from "react-firebase-hooks/auth"
import Register from './Register'

const Routing = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
  
 
  return user ? 
  (
    <Routes>
      <Route path='/logout' element={<Logout/>} />
      <Route path='*' element={<Navigate to={Logout} replace />}  />
    </Routes>
  
  )
: (
  <Routes>  
     <Route path="/" element={<Login/>} />  
      <Route path="/register" element={<Register/>} />
      <Route path='*' element={<Navigate to={Login} replace />} />
  </Routes>)
    


  

}
export default Routing