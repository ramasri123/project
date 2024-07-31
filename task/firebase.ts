// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4eiYk7aYIm81LeWVpjklKyJDh8MZQ6wI",
  authDomain: "myproject-b78dd.firebaseapp.com",
  projectId: "myproject-b78dd",
  storageBucket: "myproject-b78dd.appspot.com",
  messagingSenderId: "698185553597",
  appId: "1:698185553597:web:0122ec24bf16d9112509d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;