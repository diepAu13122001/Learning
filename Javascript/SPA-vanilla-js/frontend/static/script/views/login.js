import { firebaseApp } from "./firebaseApp.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

class Login {
  constructor() {
    document.querySelector("title").innerHTML = "Login";
  }

  initRender = (container) => {
    container.innerHTML = this.codeHTML();

    // add event listener for login form
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
      this.login(e);
    });

    // add event listener for otherLink
    const otherLink = document.getElementById("other-link");
    otherLink.addEventListener("click", (e) => {
      this.gotoRegister();
    });
  };

  // code html
  codeHTML = () => {
    return `<div id="form-layout">
        <div class="form-title">
          <div class="title">Login</div>
          <hr />
        </div>
  
        <div class="avatar">
          <img
            src="https://img7.thuthuatphanmem.vn/uploads/2023/07/12/hinh-zata-lien-quan_090846256.jpg"
            alt="avatar"
          />
        </div>
  
        <form id="login-form">
          <div class="input-group mb-3">
            <span class="input-group-text" id="email-header">
              <i class="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              id="email"
              aria-describedby="basic-email-header"
            />
          </div>
  
          <div class="input-group mb-3">
            <span class="input-group-text" id="password-header">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              id="pass"
              aria-describedby="password-header"
            />
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
  
        <div class="other-link">
          Haven't got an account?
          <a id="other-link">Register</a>
        </div>
      </div>`;
  };

  gotoRegister = () => {
    // const register = new Register();
    // app.changeActiveScreen(register);
    location.href = "/register"
  };

  login = (e) => {
    // no change anything by default
    e.preventDefault();

    // get input data
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    // validate form :)

    // signup by firebase
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // save current user in localStorage
        // localStorage.setItem("curUser", JSON.stringify(user));

        // move to postList page
        location.pathname ="/posts";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
}

export default Login;
