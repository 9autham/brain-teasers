// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-yQ8HPeS7iGtmNOx5YYpE6e5tdF-6RpM",
  authDomain: "elitmus-9autham.firebaseapp.com",
  projectId: "elitmus-9autham",
  storageBucket: "elitmus-9autham.appspot.com",
  messagingSenderId: "1003660395511",
  appId: "1:1003660395511:web:24d76114b714a7ce6aa4f2",
  measurementId: "G-RQMPTHZLMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
