// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY9KLElIgNljSOpiNjq2vUaLdZeXg6fDw",
  authDomain: "vehicle-web-85903.firebaseapp.com",
  projectId: "vehicle-web-85903",
  storageBucket: "vehicle-web-85903.appspot.com",
  messagingSenderId: "103856091941",
  appId: "1:103856091941:web:1a5eb97927ca5bd78be0cc",
  measurementId: "G-EVYBHJSMMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);