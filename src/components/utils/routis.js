import Login from "../Login";
import Logout from "../Logout";
import Register from "../Register";

import {LOGIN_PAGE,REGISTER_PAGE,LOGOUT_PAGE} from './consts';

export const publicRoutes = [
    {
        path:LOGIN_PAGE,
        Component: Login
    },
    
    {
        path:REGISTER_PAGE,
        component: Register
    }
]

export const privateRoutes = [
    {
    path:LOGOUT_PAGE,
    Component: Logout
    }
]