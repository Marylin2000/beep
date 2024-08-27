import { initializeApp } from "firebase/app";
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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

let analytics;
if (typeof window !== 'undefined') {
  try {
    const { getAnalytics } = require('firebase/analytics');
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Error initializing Firebase Analytics:", error);
  }
}

export { app, analytics, auth, googleProvider, db };
