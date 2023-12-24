import app from "../app.js";
import PostList, { calPostCreatedTime } from "./postlist.js";

class Post {
  $post_id;
  $post;

  constructor() {
    document.querySelector("title").innerHTML = "Post";
    // get post information by local 
    const currentPost = JSON.parse(localStorage.getItem("currentPost"));

    // set default values
    this.$post_id = currentPost.id;
    this.$post = currentPost.data;
  }

  initRender = (container) => {
    container.innerHTML = this.codeHTML();

    // add event listener for back btn
    document
      .querySelector("#back-home button")
      .addEventListener("click", () => {
        this.gotoPostList();
      });

    // add event for form comment
    document.getElementById("form-comment").addEventListener("submit", (e) => {
      this.createComment(e);
    });

    // get comment list
    let list = ``;
    this.getCommentList().forEach((element) => {
      list += `    <div class="post">
        <div class="post-details">
          <span class="created-by">${element.createdBy}</span>
          <span class="created-at">${calPostCreatedTime(
            element.createdAt
          )}</span>
        </div>
        <div class="post-content">
          <div class="post-title">${element.comment}</div>
        </div>
      </div>`;
    });
    document.getElementById("comment-list").innerHTML = list;
  };

  // code html
  codeHTML = () => {
    return `  <div id="back-home">
    <button type="button" class="btn btn-primary">Back</button>
  </div>

  <div class="post">
    <div class="post-details">
      Posted by <span class="created-by">${this.$post.created_by}</span>
      <span class="created-at">${calPostCreatedTime(
        this.$post.created_at
      )}</span>
    </div>
    <div class="post-content">
      <div class="post-title">${this.$post.title}</div>
      <div class="post-subtext">
      ${this.$post.caption}
      </div>
    </div>
  </div>

  <form id="form-comment">
    <div class="form-title">
      Comment as <span id="username">username</span>
    </div>
    <input type="text" placeholder="Enter your comment ..." required />
    <button type="submit" class="btn btn-primary">Comment</button>
  </form>

  <div id="comment-list"></div>`;
  };

  gotoPostList = () => {
    const postList = new PostList();
    app.changeActiveScreen(postList);
  };

  createComment = (e) => {
    e.preventDefault();
    console.log("comment");
  };

  getCommentList = () => {
    let list = [
      {
        id: "c_001",
        postId: "p_001",
        createdBy: "ngocdiep123",
        createdAt: "15/11/2023 12:15:32",
        comment: "Good post, so helpfully!",
      },
    ];
    return list;
  };
}

export default Post;
