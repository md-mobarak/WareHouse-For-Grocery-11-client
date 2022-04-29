// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1g_eV8KbTHw2URR9HoVenapYtg1ZkPOo",
    authDomain: "assignment-11-51c6f.firebaseapp.com",
    projectId: "assignment-11-51c6f",
    storageBucket: "assignment-11-51c6f.appspot.com",
    messagingSenderId: "548448714638",
    appId: "1:548448714638:web:8092798a30c8328394aedf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;