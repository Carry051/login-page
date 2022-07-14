import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCp_ToVIW9vkFAG20epsr2NppA2oROYG5Y",
  authDomain: "firstregister-87aca.firebaseapp.com",
  projectId: "firstregister-87aca",
  storageBucket: "firstregister-87aca.appspot.com",
  messagingSenderId: "138272442637",
  appId: "1:138272442637:web:3470fed58b76949d11c844",
  measurementId: "G-1DBEPV7SE5"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
