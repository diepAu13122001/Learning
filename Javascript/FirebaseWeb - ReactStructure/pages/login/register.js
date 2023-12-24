import app, { firebaseApp } from "../../app.js";
import Post from "../home/post.js";
import PostList from "../home/postlist.js";
import Login from "./login.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

class Register {
  constructor() {
    //set title for HTML page
    document.getElementsByTagName("title")[0].innerHTML = "Register";

    //remove nav in body
    const body = document.getElementsByTagName("body")[0];
    let nav = document.getElementsByTagName("nav")[0];
    if (nav) body.removeChild(nav);
  }

  initRender(container) {
    //add components in container of app
    let form_layout = document.createElement("div");
    form_layout.id = "form-layout";

    let form_header = document.createElement("div");
    form_header.classList.add("form-title");
    let header_text = document.createElement("div");
    header_text.classList.add("title");
    header_text.innerText = "Login";
    form_header.appendChild(header_text);
    form_header.appendChild(document.createElement("hr"));

    let ava = document.createElement("div");
    ava.classList.add("avatar");
    let img = document.createElement("img");
    img.src =
      "https://shopgarena.net/wp-content/uploads/2022/08/Avatar-Zata-chibi-cute.jpg";
    img.alt = "avatar";
    ava.appendChild(img);

    let signup_form = document.createElement("form");
    signup_form.innerHTML = `          
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
    <span class="input-group-text" id="password-header">
      <i class="fa-solid fa-lock"></i>
    </span>
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      aria-label="Password"
      id="password"
      aria-describedby="password-header"
    />
  </div>`;

    let submit_btn = document.createElement("button");
    submit_btn.type = "submit";
    submit_btn.classList.add("btn");
    submit_btn.classList.add("btn-primary");
    submit_btn.innerText = "Register";
    submit_btn.addEventListener("click", this.getSignUp.bind(this));
    signup_form.appendChild(submit_btn);

    let link_div = document.createElement("div");
    link_div.classList.add("other-link");
    link_div.innerText = "Have already an account? ";
    let link = document.createElement("a");
    link.id = "other-link";
    link.innerText = "Login";
    // add event for a
    link.addEventListener("click", this.gotoLogin.bind(this));
    link_div.appendChild(link);

    form_layout.appendChild(form_header);
    form_layout.appendChild(ava);
    form_layout.appendChild(ava);
    form_layout.appendChild(signup_form);
    form_layout.appendChild(link_div);

    container.appendChild(form_layout);
  }

  getSignUp(e) {
    //todo
    // chan phan di chuyen tu dong cua form
    e.preventDefault();

    // get data from input (login form)
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // validate form
    if (!username || !email || !password) {
      alert("Please fill this form");
    } else if (username.trim().includes(" ")) {
      alert("Username can't have space");
    } else if (!email.includes("@")) {
      alert("Email is bad format");
    } else if (password < 6) {
      alert("Password needs more than 5 letters");
    } else {
      // signup by firebase
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

      // add information in user object
      onAuthStateChanged(auth, (user) => {
        if (user) {
          updateProfile(user, {
            displayName: username,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated! => goto signin page
              const signin = new Login();
              app.changeActiveScreen(signin);
            })
            .catch((error) => {
              // An error occurred
              const errorMessage = error.message;
              alert(errorMessage);
            });
        } else {
          // User is signed out
          alert("Please signup or signin first!");
        }
      });
    }
  }

  gotoLogin() {
    //todo
    const login = new Login();
    app.changeActiveScreen(login);
  }
}

export default Register;
