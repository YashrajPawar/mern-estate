// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mern-project-e0013.firebaseapp.com",
  projectId: "mern-project-e0013",
  storageBucket: "mern-project-e0013.appspot.com",
  messagingSenderId: "22512420226",
  appId: "1:22512420226:web:718be47046019e67027b9b"
}; 

// Initialize Firebase
export const app = initializeApp(firebaseConfig);