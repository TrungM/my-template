// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChb6TbQ2skt-Hp4d3458D6HqGc_rwyLzo",
  authDomain: "lmproject-538b3.firebaseapp.com",
  projectId: "lmproject-538b3",
  storageBucket: "lmproject-538b3.appspot.com",
  messagingSenderId: "910777006715",
  appId: "1:910777006715:web:a024d237ef0c958f11c0de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
