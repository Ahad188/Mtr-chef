// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1KaUJ-jb79hQ9MM82gA5hn37QdDw1bdQ",
  authDomain: "mtr-chef.firebaseapp.com",
  projectId: "mtr-chef",
  storageBucket: "mtr-chef.appspot.com",
  messagingSenderId: "531095342066",
  appId: "1:531095342066:web:a77e6933054f839860b96b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;