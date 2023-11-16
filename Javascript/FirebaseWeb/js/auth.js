import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

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
const app = initializeApp(firebaseConfig);

let registerForm = document.getElementById("register-form");
let loginForm = document.getElementById("login-form");

if (registerForm != null) {
  // bat su kien cho form (k bat rieng le cho nut submit :)
  registerForm.addEventListener("submit", (e) => {
    // no change anything by default
    e.preventDefault();

    // get input data
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("pass").value;

    // signup by firebase
    const uid = "M4oo3r0q8KcbuKeTRJB4uSz9nBx2";
    const auth = getAuth(app);

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     uid = user.uid;
    //     console.log(user);
    //     console.log(uid);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // show error message
    //     alert(errorCode);
    //   });

    // add username in userData of Firebase

    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     updateProfile(user, {
    //       displayName: username,
    //       photoURL:
    //         "https://img7.thuthuatphanmem.vn/uploads/2023/07/12/hinh-zata-lien-quan_090846256.jpg",
    //     })
    //       .then(() => {
    //         // Profile updated!
    //         user.providerData.forEach((profile) => {
    //           console.log("Sign-in provider: " + profile.providerId);
    //           console.log("  Provider-specific UID: " + profile.uid);
    //           console.log("  Name: " + profile.displayName);
    //           console.log("  Email: " + profile.email);
    //           console.log("  Photo URL: " + profile.photoURL);
    //         });
    //       })
    //       .catch((error) => {
    //         // An error occurred
    //         // ...
    //       });
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      } else {
        // User is signed out
        // ...
      }
    });
  });
} else {
  // Login
  loginForm.addEventListener("submit", (e) => {
    // no change anything by default
    e.preventDefault();

    // get input data
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    // signup by firebase
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // save current user in localStorage
        // localStorage.setItem("curUser", JSON.stringify(user));

        // move to home
        location.href = "../index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
}
