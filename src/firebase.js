import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq2njpwxnbPNnIfM9j8ho_Pd8gR8NHGYw",
  authDomain: "clone-337317.firebaseapp.com",
  projectId: "youtube-clone-337317",
  storageBucket: "youtube-clone-337317.appspot.com",
  messagingSenderId: "143355082022",
  appId: "1:143355082022:web:172bbb03f2f032aeb0fde7",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { firebase, auth, db, storage };
