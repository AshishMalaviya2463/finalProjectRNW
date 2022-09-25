// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkjfaSsgBuZRCOaWAfGMCtBkh04ef1G4U",
  authDomain: "finalprojectrnw.firebaseapp.com",
  projectId: "finalprojectrnw",
  storageBucket: "finalprojectrnw.appspot.com",
  messagingSenderId: "2215889812",
  appId: "1:2215889812:web:cb3f70c8c3ca30cdb75d81",
  measurementId: "G-52CZVXV8P4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
