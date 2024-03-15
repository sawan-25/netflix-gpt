// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcV4wUtwspdWz_dkma5pqBvRiD_5pi5AQ",
  authDomain: "netflixgpt-2a1ef.firebaseapp.com",
  projectId: "netflixgpt-2a1ef",
  storageBucket: "netflixgpt-2a1ef.appspot.com",
  messagingSenderId: "1082299264995",
  appId: "1:1082299264995:web:8644ce3388a56f01297ad6",
  measurementId: "G-YNV88NE23G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);