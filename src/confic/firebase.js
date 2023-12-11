// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Ro7Fg_k7upUAhdK4JdfdjTOD_0WdGZc",
  authDomain: "rifas-7feac.firebaseapp.com",
  projectId: "rifas-7feac",
  storageBucket: "rifas-7feac.appspot.com",
  messagingSenderId: "538234621184",
  appId: "1:538234621184:web:8ae04263e886146a4537e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app)
export const auth = getAuth(app)