// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPgysXMWKYeW4plmU4JGhcdhvU4xv7KAw",
  authDomain: "netflixgpt-ed952.firebaseapp.com",
  projectId: "netflixgpt-ed952",
  storageBucket: "netflixgpt-ed952.appspot.com",
  messagingSenderId: "948212886209",
  appId: "1:948212886209:web:beddb78f5c150c9f3a8240",
  measurementId: "G-JVBYKZRJ8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

//npm install -g firebase-tools
