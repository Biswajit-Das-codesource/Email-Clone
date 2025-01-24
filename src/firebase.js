// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyAsv15Lx9yFeiRKU80-MhNesZsTIQJbk7Y",
  authDomain: "clone-7434b.firebaseapp.com",
  projectId: "clone-7434b",
  storageBucket: "clone-7434b.firebasestorage.app",
  messagingSenderId: "1094096280334",
  appId: "1:1094096280334:web:c423981797da03ce03155f",
  measurementId: "G-KZCN2GFVNX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app)

export const provider  = new GoogleAuthProvider();