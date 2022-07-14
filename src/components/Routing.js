import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'


import { privateRoutes, publicRoutes } from './utils/routis'
import { LOGIN_PAGE, LOGOUT_PAGE } from './utils/consts'

const Routing = () => {
    
    const user = false;
  
 
  return user ? 
  (
        <Routes>
            {privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact={true} />
                
            )}  
            <Route path='*' element={<Navigate to={LOGOUT_PAGE} replace />} />
           
        </Routes>
  
  )
: (
  <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component />} exact={true}/>
            )}
        <Route path='*' element={<Navigate to={LOGIN_PAGE} replace />} />
        
    </Routes>)
    


  

}
export default Routing