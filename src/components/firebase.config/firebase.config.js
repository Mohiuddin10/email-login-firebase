// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAtn_98qjU6_U_JGyA60Png42QYTdMhLY",
  authDomain: "simple-firebase-core.firebaseapp.com",
  projectId: "simple-firebase-core",
  storageBucket: "simple-firebase-core.appspot.com",
  messagingSenderId: "30886026375",
  appId: "1:30886026375:web:bb24e695eb7fd2deae2c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;