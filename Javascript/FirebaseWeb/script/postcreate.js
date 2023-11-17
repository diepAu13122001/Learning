import app from "../app.js";
import PostList from "./postlist.js";

class PostCreate {
  constructor() {
    document.querySelector("title").innerHTML = "Create Post";
  }

  initRender = (container) => {
    container.innerHTML = this.codeHTML();

    // add event listener for cancel btn
    document.getElementById("created-form").addEventListener("reset", () => {
      this.gotoPostList();
    });

    // add event listener for post btn
    document.getElementById("created-form").addEventListener("submit", (e) => {
      this.createPost(e);
    });
  };

  // code html
  codeHTML = () => {
    return ` <form id="created-form">
    <input
      type="text"
      id="post-title"
      name="post-title"
      maxlength="50"
      placeholder="Post title"
      required
    />

    <textarea
      name="post-subtext"
      id="post-subtext"
      cols="45"
      rows="10"
      placeholder="Post body(optional)"
    ></textarea>

    <div class="button-group">
      <button type="reset" class="btn btn-secondary">Cancel</button>
      <button type="submit" class="btn btn-primary">Post</button>
    </div>
  </form>`;
  };

  gotoPostList = () => {
    const postList = new PostList();
    app.changeActiveScreen(postList);
  };

  createPost = (e) => {
    e.preventDefault();
  };
}

export default PostCreate;
