
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmJE4Hx0qMFHIwx9lCOQLeUqceaia_0kY",
  authDomain: "ema-john-simple-f3fa0.firebaseapp.com",
  projectId: "ema-john-simple-f3fa0",
  storageBucket: "ema-john-simple-f3fa0.appspot.com",
  messagingSenderId: "398246211140",
  appId: "1:398246211140:web:0698c599b27f03ed40d611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;