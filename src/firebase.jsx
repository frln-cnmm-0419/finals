// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfbXNMMl_LRaVqipBtRqGjAalDyyWXfRE",
  authDomain: "hci-final-proj-b9b64.firebaseapp.com",
  projectId: "hci-final-proj-b9b64",
  storageBucket: "hci-final-proj-b9b64.appspot.com",
  messagingSenderId: "305393309772",
  appId: "1:305393309772:web:85a65660ebbeefcd837ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth();

export function signup(email, password) {
	return createUserWithEmailAndPassword(authentication, email, password)
}