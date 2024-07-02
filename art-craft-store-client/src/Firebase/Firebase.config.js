// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABSXpEDNmbBfmJOIb1GR1VgdC1m1_sV88",
  authDomain: "artcraft-d995b.firebaseapp.com",
  projectId: "artcraft-d995b",
  storageBucket: "artcraft-d995b.appspot.com",
  messagingSenderId: "325536785305",
  appId: "1:325536785305:web:49b07ccb88e2b33df6e908"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;