import app, { firebaseApp } from "../../app.js";
import PostList from "../home/postlist.js";
import Register from "./register.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

class Login {
  constructor() {
    // set title of HTML
    document.getElementsByTagName("title")[0].innerHTML = "Login";

    //remove nav in body
    const body = document.getElementsByTagName("body")[0];
    let nav = document.getElementsByTagName("nav")[0];
    if(nav) body.removeChild(nav);
  }

  initRender(container) {
    let title_form = document.createElement("div");
    title_form.id = "form-layout";

    let title_form_header = document.createElement("div");
    title_form_header.classList.add("form-title");
    let header_text = document.createElement("div");
    header_text.classList.add("title");
    header_text.innerText = "Login";
    title_form_header.appendChild(header_text);
    title_form_header.appendChild(document.createElement("hr"));

    let ava = document.createElement("div");
    ava.classList.add("avatar");
    let img = document.createElement("img");
    img.src =
      "https://shopgarena.net/wp-content/uploads/2022/08/Avatar-Zata-chibi-cute.jpg";
    img.alt = "avatar";
    ava.appendChild(img);

    let loginForm = document.createElement("form");
    loginForm.innerHTML = `          <div class="input-group mb-3">
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
      id="password"
      aria-describedby="password-header"
    />
  </div>`;

    let submit_btn = document.createElement("button");
    submit_btn.type = "submit";
    submit_btn.classList.add("btn");
    submit_btn.classList.add("btn-primary");
    submit_btn.innerText = "Sign in";
    submit_btn.addEventListener("click", this.getLogin.bind(this));
    loginForm.appendChild(submit_btn);

    let link_div = document.createElement("div");
    link_div.classList.add("other-link");
    link_div.innerText = "Haven't got an account? ";
    let link = document.createElement("a");
    link.id = "other-link";
    link.innerText = "Register";
    // add event for a
    link.addEventListener("click", this.gotoRegister.bind(this));
    link_div.appendChild(link);

    title_form.appendChild(title_form_header);
    title_form.appendChild(ava);
    title_form.appendChild(ava);
    title_form.appendChild(loginForm);
    title_form.appendChild(link_div);

    container.appendChild(title_form);
  }

  getLogin(e) {
    // chan phan di chuyen tu dong cua form
    e.preventDefault();

    // get data from input (login form)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // validate form
    if (!email || !password) {
      alert("Please fill the form");
    } else if (!email.includes("@")) {
      alert("Email has a badly format");
    } else if (password < 6) {
      alert("Password needs have least 6 letters");
    } else {
      // sign in with firebase
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // save in localStorage
          localStorage.setItem("currentUser", JSON.stringify(user));
          // goto PostList
          const postlist = new PostList();
          app.changeActiveScreen(postlist);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }

  gotoRegister() {
    //todo
    const register = new Register();
    app.changeActiveScreen(register);
  }
}

export default Login;
