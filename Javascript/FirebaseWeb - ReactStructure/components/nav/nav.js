import app, { firebaseApp } from "../../app.js";
import PostList from "../../pages/home/postlist.js";
import Login from "../../pages/login/login.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

class Nav {
  constructor() {}

  initRender(container) {
    let navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.classList.add("bg-body-tertiary");

    let container_fluid = document.createElement("div");
    container_fluid.classList.add("container-fluid");

    let link_nav = document.createElement("a");
    link_nav.classList.add("navbar-brand");
    link_nav.innerText = "MindXHub";
    link_nav.addEventListener("click", this.gotoPostList);

    let div_account = document.createElement("div");
    div_account.classList.add("account");
    div_account.classList.add("d-flex");

    let account_icon = document.createElement("div");
    account_icon.id = "account-icon";
    account_icon.innerText = this.getUsernameLetters();

    let logout_btn = document.createElement("button");
    logout_btn.type = "button";
    logout_btn.classList.add("btn");
    logout_btn.classList.add("btn-danger");
    logout_btn.innerText = "Logout";
    logout_btn.addEventListener("click", this.logout);

    div_account.appendChild(account_icon);
    div_account.appendChild(logout_btn);

    container_fluid.appendChild(link_nav);
    container_fluid.appendChild(div_account);

    navbar.appendChild(container_fluid);

    if (!container.getElementsByTagName("nav")[0]) {
      container.prepend(navbar);
    }
  }

  gotoPostList() {
    const postlist = new PostList();
    app.changeActiveScreen(postlist);
  }

  getUsernameLetters() {
    let letters = "";
    //todo
    // get data from local storage
    const curUser = JSON.parse(localStorage.getItem("currentUser"));
    letters = curUser.displayName.substring(0, 2);
    return letters;
  }

  logout(e) {
    //todo
    // clear localStorage
    localStorage.clear();

    //signout form firebase
    const auth = getAuth(firebaseApp);
    signOut(auth)
      .then(() => {
        // Sign-out successful => goto login
        const login = new Login();
        app.changeActiveScreen(login);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
}

export default Nav;
