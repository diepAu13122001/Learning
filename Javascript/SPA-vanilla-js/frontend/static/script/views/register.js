import { firebaseApp } from "./firebaseApp.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

class Register {
  constructor() {
    document.querySelector("title").innerHTML = "Register";
  }

  initRender = (container) => {
    container.innerHTML = this.codeHTML();

    // add event listener for register form
    const loginForm = document.getElementById("register-form");
    loginForm.addEventListener("submit", (e) => {
      this.register(e);
    });

    // add event listener for otherLink
    const otherLink = document.getElementById("other-link");
    otherLink.addEventListener("click", (e) => {
      this.gotoSignin();
    });
  };

  codeHTML = () => {
    return ` <div id="form-layout">
    <div class="form-title">
      <div class="title">Register</div>
      <hr />
    </div>

    <div class="avatar">
      <img
        src="https://img7.thuthuatphanmem.vn/uploads/2023/07/12/hinh-zata-lien-quan_090846256.jpg"
        alt="avatar"
      />
    </div>

    <form id="register-form">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <i class="fa-solid fa-user"></i>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          id="username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"> @ </span>
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          id="email"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <i class="fa-solid fa-lock"></i>
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          id="pass"
          aria-describedby="basic-addon1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>

    </form>

    <div class="other-link">
      Have already an account?
      <a id="other-link">Login</a>
      </div>
  </div>`;
  };

  register = (e) => {
    // no change anything by default
    e.preventDefault();

    // get input data
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("pass").value;

    // signup by firebase
    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        const uid = user.uid;
        console.log(user);
        console.log(uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // show error message
        alert(errorMessage);
      });

    // add name + avatar default for current user
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        updateProfile(user, {
          displayName: username,
          photoURL:
            "https://img7.thuthuatphanmem.vn/uploads/2023/07/12/hinh-zata-lien-quan_090846256.jpg",
        })
          .then(() => {
            // Profile updated!
            user.providerData.forEach((profile) => {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
            });
          })
          .catch((error) => {
            // An error occurred
            const errorCode = error.code;
            const errorMessage = error.message;
            // show error message
            alert(errorMessage);
          });
      } else {
        // User is signed out
        alert("You need to login to edit your profile!");
      }
    });
  };

  gotoSignin = () => {
    // const login = new Login();
    // app.changeActiveScreen(login);
    location.href = "/";
  };
}

export default Register;
