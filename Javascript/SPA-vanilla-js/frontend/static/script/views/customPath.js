import app from "../app.js";
import Login from "./login.js";
import Register from "./register.js";
import Post from "./post.js";
import Create from "./postcreate.js";
import Posts from "./postlist.js";
// ------------ Change page by path ---------------------------------
export default function customPath() {
  const pathToRegex = (path) =>
    new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

  const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1]
    );

    return Object.fromEntries(
      keys.map((key, i) => {
        return [key, values[i]];
      })
    );
  };

  const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
  };

  const router = async () => {
    const routes = [
      { path: "/", view: Login },
      { path: "/posts", view: Posts },
      { path: "/posts/:id", view: Post },
      { path: "/register", view: Register },
      { path: "/create", view: Create },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map((route) => {
      return {
        route: route,
        result: location.pathname.match(pathToRegex(route.path)),
      };
    });

    let match = potentialMatches.find(
      (potentialMatch) => potentialMatch.result !== null
    );

    if (!match) {
      match = {
        route: routes[0],
        result: [location.pathname],
      };
    }

    const view = new match.route.view(getParams(match));
    app.changeActiveScreen(view);
  };

  window.addEventListener("popstate", router);

  document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
      }
    });

    router();
  });
}
