import Login from "./script/login.js";
import PostList from "./script/postlist.js";

class App {
  activeScreen;
  container;
  nav;
  main;

  constructor(container) {
    this.container = container;
  }

  changeActiveScreen(screen) {
    if (this.activeScreen !== undefined) {
      this.container.innerHTML = "";
    }

    this.activeScreen = screen;
    this.activeScreen.initRender(this.container);
  }
}
const container = document.getElementById("app");
const app = new App(container);

// check file to load html code
if (location.href.substring(21) == "/index.html" || location.href.substring(21) == "") {
  const login = new Login();
  app.changeActiveScreen(login);
}
if (location.href.substring(21) == "/pages/home.html") {
  const postList = new PostList();
  app.changeActiveScreen(postList);
}

//export instant của app chứ ko export class vì App là duy nhất
export default app;
