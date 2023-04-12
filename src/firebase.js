// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpWLZdtDhlHhNvW7Bz0_hhAl4FD0Km6xs",
  authDomain: "realestate-clone-react.firebaseapp.com",
  projectId: "realestate-clone-react",
  storageBucket: "realestate-clone-react.appspot.com",
  messagingSenderId: "624639262820",
  appId: "1:624639262820:web:ef3e2957ecd13356eadf71"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()