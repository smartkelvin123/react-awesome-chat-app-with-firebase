// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB29zRd9o1mUesEl7_VIlATQqqiVgaZjm0",
  authDomain: "chat-app-9b24c.firebaseapp.com",
  projectId: "chat-app-9b24c",
  storageBucket: "chat-app-9b24c.appspot.com",
  messagingSenderId: "1011782091008",
  appId: "1:1011782091008:web:371c9bd1c46a71baeaf3e5",
  measurementId: "G-J52QL55DJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
