// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIem88jctgE1VQSoURArzFSxMagnzj3mY",
  authDomain: "contact-app-db5a6.firebaseapp.com",
  projectId: "contact-app-db5a6",
  storageBucket: "contact-app-db5a6.appspot.com",
  messagingSenderId: "149160401349",
  appId: "1:149160401349:web:0d0f1a2e078a562b5e93ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)