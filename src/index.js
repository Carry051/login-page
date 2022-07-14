import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getAuth} from "firebase/auth"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';


const app  = firebase.initializeApp( {
  

  apiKey: "AIzaSyCp_ToVIW9vkFAG20epsr2NppA2oROYG5Y",

  authDomain: "firstregister-87aca.firebaseapp.com",

  projectId: "firstregister-87aca",

  storageBucket: "firstregister-87aca.appspot.com",

  messagingSenderId: "138272442637",

  appId: "1:138272442637:web:3470fed58b76949d11c844",

  measurementId: "G-1DBEPV7SE5"

});




export const auth = getAuth(app)

export const Context = createContext(null)

const firestore = firebase.firestore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    auth,
    firebase,
    firestore,
    
  }}>
    <React.StrictMode>
    
          <App />
    
    </React.StrictMode>
  </Context.Provider>
);

