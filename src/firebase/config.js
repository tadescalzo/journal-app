import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBJNt0fouDwVGf1ChDeCw3UVO7XF4OsLSY",
  authDomain: "react-cursos-70d00.firebaseapp.com",
  projectId: "react-cursos-70d00",
  storageBucket: "react-cursos-70d00.appspot.com",
  messagingSenderId: "95467557461",
  appId: "1:95467557461:web:47ee28324576170b427adc"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)