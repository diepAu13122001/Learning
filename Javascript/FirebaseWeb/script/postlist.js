import app from "../app.js";
import Post from "./post.js";
import PostCreate from "./postcreate.js";

class PostList {
  $postList;

  constructor() {
    document.querySelector("title").innerHTML = "Post List";
    this.$postList = this.getPostList();
  }

  initRender = (container) => {
    container.innerHTML = this.codeHTML();

    // add event click for create new post btn
    document.getElementById("create-btn").addEventListener("click", () => {
      this.gotoPostCreate();
    });

    document.getElementById("posts-qty").innerHTML = this.getPostsQty();

    // add post list
    if (this.$postList.length > 0) {
      let list = ``;
      this.$postList.forEach((element) => {
        list += `<div class="post">
      <div class="post-details">
        Posted by <span class="created-by">${element.createdBy}</span>
        <span class="created-at">${calPostCreatedTime(element.createdAt)}</span>
      </div>
      <div class="post-content">
        <div class="post-title" id=${element.id}>
          ${element.title}
        </div>
        <div class="post-subtext">
          ${element.subText}
        </div>
      </div>
    </div>`;
      });

      document.getElementById("post-list").innerHTML = list;
    }

    document.getElementById("p_001").addEventListener("click", () => {
      this.gotoPost();
    });
  };

  // code html
  codeHTML = () => {
    return `
    <div class="main-title">
      <div id="posts-qty">
    </div>
      <button type="button" class="btn btn-primary" id="create-btn">New Post</button>
    </div>

    <div id="post-list">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-1965034-1662569.png" width=50%>
    </div>`;
  };

  gotoPostCreate = () => {
    const create = new PostCreate();
    app.changeActiveScreen(create);
  };

  getPostList = () => {
    // from firestore
    let list = [
      {
        id: "p_001",
        createdBy: "ngocdiep123",
        createdAt: "15/11/2023 12:15:32",
        title: "Hi everyone!",
        subText:
          "You can print 'Hello world!' in Java by the code: System.out.println('Hello World!');",
      },
    ];
    return list;
  };

  getPostsQty = () => {
    const len = this.$postList.length;
    if (len == 0) {
      return len + " post";
    } else if (len == 1) {
      return len + " post";
    } else {
      return len + " posts";
    }
  };

  // calPostCreatedTime = (time) => {
  //   // todo
  //   return "2 weeks ago";
  // };

  gotoPost = () => {
    // console.log(postId);
    const post = new Post();
    app.changeActiveScreen(post);
  };
}

export default PostList;

export function calPostCreatedTime(time) {
  // todo
  return time + " weeks ago";
}
