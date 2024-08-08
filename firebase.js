// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY_AcelR6wi3jtdcITSA4mVOjBI0ch7to",
  authDomain: "inventory-management-14144.firebaseapp.com",
  projectId: "inventory-management-14144",
  storageBucket: "inventory-management-14144.appspot.com",
  messagingSenderId: "949413533765",
  appId: "1:949413533765:web:4f56e1d309d20c57d72b2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };