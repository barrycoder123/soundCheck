import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzdxRSVaxSPD7mwoZy0xlsPRiKp9UOdwo",
  authDomain: "soundcheck-64453.firebaseapp.com",
  projectId: "soundcheck-64453",
  storageBucket: "soundcheck-64453.appspot.com",
  messagingSenderId: "23348707089",
  appId: "1:23348707089:web:b86839c04eacb1934e56b0",
  measurementId: "G-F3WHFS0WBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);