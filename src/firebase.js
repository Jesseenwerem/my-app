// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
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
const auth = getAuth(app);

export {app, auth}