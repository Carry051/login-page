import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

const auth = getAuth(app)

export {
    auth,
    onAuthStateChanged
}

export default app
