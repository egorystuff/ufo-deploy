import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANIsL1JM5hNKw4puxBVCoPwxNQTn1Qz1c",
  authDomain: "ufoapp-525c8.firebaseapp.com",
  databaseURL: "https://ufoapp-525c8-default-rtdb.firebaseio.com",
  projectId: "ufoapp-525c8",
  storageBucket: "ufoapp-525c8.firebasestorage.app",
  messagingSenderId: "988223681324",
  appId: "1:988223681324:web:5f9a5faad4b1d4184ff289",
  measurementId: "G-Q9ZF6GVNMX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
