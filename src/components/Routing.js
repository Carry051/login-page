
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { auth, onAuthStateChanged } from './firebase-config'

import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

const Routing = () => {

    const [user, setUser] = useState(null)

    onAuthStateChanged(auth, user => {
        try {
            // const currentUser = firebase.auth().currentUser
            setUser(user)
        } catch (error) {
        }
    })

    if (user)
        return (
            <Routes>
                <Route path={'/logout'} element={<Logout />} exact={true} />
                <Route path='*' element={<Navigate to={'/logout'} replace />} />
            </Routes>
        )

    return (
        <Routes>
            <Route path={'/login'} element={<Login />} exact={true} />
            <Route path={'/register'} element={<Register />} exact={true} />
            <Route path='*' element={<Navigate to={'/login'} replace />} />
        </Routes>
    )
}

export default Routing
