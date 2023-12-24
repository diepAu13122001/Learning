// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1CAx-CyP_GQM3FusEsLVPgyhaEw95Nec",
  authDomain: "jsi03-blogweb-1b7b7.firebaseapp.com",
  databaseURL:
    "https://jsi03-blogweb-1b7b7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsi03-blogweb-1b7b7",
  storageBucket: "jsi03-blogweb-1b7b7.appspot.com",
  messagingSenderId: "643164779534",
  appId: "1:643164779534:web:c17a8c18c285a9880c785f",
  measurementId: "G-GJR7S7GWTL",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// khai bao database firestore
export const db = getFirestore(firebaseApp);
