// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJk9mLTZ1LEBIN38fu9hA9A5M4e6PVBAU",
  authDomain: "bool-catalog.firebaseapp.com",
  projectId: "bool-catalog",
  storageBucket: "bool-catalog.appspot.com",
  messagingSenderId: "33946988828",
  appId: "1:33946988828:web:c8d9f1979f78b19dbd0ad9",
  measurementId: "G-M2LRG2LYXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
