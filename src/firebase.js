// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAMAoqGWCMAzW3rIm8J6N0zswdnc4oxkZ4",
  authDomain: "my-first-project-7db1f.firebaseapp.com",
  projectId: "my-first-project-7db1f",
  storageBucket: "my-first-project-7db1f.appspot.com",
  messagingSenderId: "926021010197",
  appId: "1:926021010197:web:dab124296890baec161f1c",
  measurementId: "G-MD4JPPTM24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };