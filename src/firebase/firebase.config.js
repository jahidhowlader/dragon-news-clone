// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUln0Kl2dA0FpifMxep77RlQnpH-CZiwA",
  authDomain: "dragon-news-clone.firebaseapp.com",
  projectId: "dragon-news-clone",
  storageBucket: "dragon-news-clone.appspot.com",
  messagingSenderId: "772740970974",
  appId: "1:772740970974:web:6ccd4d09fc290cb319054f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app