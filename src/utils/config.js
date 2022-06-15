// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdNaMoaHnAA1TfMIeM2T327hct-E1b39c",
  authDomain: "meals-2-go.firebaseapp.com",
  projectId: "meals-2-go",
  storageBucket: "meals-2-go.appspot.com",
  messagingSenderId: "482697582995",
  appId: "1:482697582995:web:ed505c7b06929ce0227066",
  measurementId: "G-S7J8W8KBS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);