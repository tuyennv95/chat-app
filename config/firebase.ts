// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Y61l3Nscx9chmS8AyAVtsx3eENTw1_M",
  authDomain: "chatapp-clone-2.firebaseapp.com",
  projectId: "chatapp-clone-2",
  storageBucket: "chatapp-clone-2.appspot.com",
  messagingSenderId: "569878658211",
  appId: "1:569878658211:web:7c05ba156fabe0bffa1316"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {db, auth, provider}