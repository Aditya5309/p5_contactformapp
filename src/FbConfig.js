// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBdG_7CcVFREv7TJ-x65Sf-L_FX9U7Xdo",
  authDomain: "p3-feedbackapp-27-07-23.firebaseapp.com",
  databaseURL: "https://p3-feedbackapp-27-07-23-default-rtdb.firebaseio.com",
  projectId: "p3-feedbackapp-27-07-23",
  storageBucket: "p3-feedbackapp-27-07-23.appspot.com",
  messagingSenderId: "985669338280",
  appId: "1:985669338280:web:17f75937cf3e321042ee9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;