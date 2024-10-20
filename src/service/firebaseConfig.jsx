// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC6ib6PB-mJqBWnbmD8TeofXfWFk_-qTg",
  authDomain: "ai-trip-planner-28f37.firebaseapp.com",
  projectId: "ai-trip-planner-28f37",
  storageBucket: "ai-trip-planner-28f37.appspot.com",
  messagingSenderId: "663052780923",
  appId: "1:663052780923:web:2a90ad40cdb827619aa9de",
  measurementId: "G-JVR2Q4F2ZS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
