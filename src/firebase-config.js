// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB2wW_MAkTiW217mRtyQznFtMop0yAc_Y",
  authDomain: "blog-72171.firebaseapp.com",
  projectId: "blog-72171",
  storageBucket: "blog-72171.appspot.com",
  messagingSenderId: "618403960391",
  appId: "1:618403960391:web:680c5ceb75137162e48362",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
