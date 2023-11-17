import Login from "./script/login.js";
import Post from "./script/post.js";
import PostCreate from "./script/postcreate.js";
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
if (location.href.substring(22) == "") {
  const login = new Login();
  app.changeActiveScreen(login);
} else if (location.href.substring(22) == "/list") {
  const postList = new PostList();
  app.changeActiveScreen(postList);
} else if (location.href.substring(22) == "/post") {
  const post = new Post();
  app.changeActiveScreen(post);
} else if (location.href.substring(22) == "/create") {
  const create = new PostCreate();
  app.changeActiveScreen(create);
}

//export instant của app chứ ko export class vì App là duy nhất
export default app;
