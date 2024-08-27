// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNU4dIf0CYy87H2klHv-eHA0JgJQyFiUw",
  authDomain: "beep-nine.firebaseapp.com",
  projectId: "beep-nine",
  storageBucket: "beep-nine.appspot.com",
  messagingSenderId: "1067899902065",
  appId: "1:1067899902065:web:b08d11e8f2ccbcb1e363d0",
  measurementId: "G-ZWG0DFR3BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, analytics, auth, googleProvider }; 
