// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-88ece.firebaseapp.com",
  projectId: "real-estate-88ece",
  storageBucket: "real-estate-88ece.appspot.com",
  messagingSenderId: "729371555158",
  appId: "1:729371555158:web:9b0ae601c7e486a28392f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);