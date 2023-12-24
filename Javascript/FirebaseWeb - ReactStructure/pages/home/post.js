import app from "../../app.js";
import Card from "../../components/card/card.js";
import Nav from "../../components/nav/nav.js";
import PostList, { calPostCreatedTime, getUsername } from "./postlist.js";

class Post {
  constructor() {
    // set title
    document.querySelector("title").innerHTML = "Post";

    // get post information by local
    const currentPost = JSON.parse(localStorage.getItem("currentPost"));

    // declare some var for current post
    this.$id = currentPost.id;
    this.$created_by = getUsername(currentPost.data.created_by);
    this.$created_at = calPostCreatedTime(currentPost.data.created_at);
    this.$title = currentPost.data.title;
    this.$caption = currentPost.data.caption;
  }

  initRender(container) {
    // add navigator
    const body = document.getElementsByTagName("Body")[0];
    const navbar = new Nav();
    navbar.initRender(body);

    let main = document.createElement("main");

    let btn_home_div = document.createElement("div");
    btn_home_div.id = "back-home";

    let btn_home = document.createElement("button");
    btn_home.type = "button";
    btn_home.classList.add("btn");
    btn_home.classList.add("btn-primary");
    btn_home.innerText = "Back";

    btn_home_div.appendChild(btn_home);
    main.appendChild(btn_home_div);

    let post = new Card(
      this.$id,
      this.$created_by,
      this.$created_at,
      this.$title,
      this.$caption
    );
    post.initRender(main);

    let form_comment = document.createElement("form");
    form_comment.id = "form-comment";

    let form_title = document.createElement("div");
    form_title.classList.add("form-title");
    let username_span = document.createElement("span");
    username_span.id = "username";
    username_span.innerText = getUsername();
    form_title.innerHTML = "Comment as ";
    form_title.appendChild(username_span);
    form_comment.appendChild(form_title);

    let input_comment = document.createElement("input");
    input_comment.type = "text";
    input_comment.placeholder = "Enter your comment ...";
    form_comment.appendChild(input_comment);

    let comment_btn = document.createElement("button");
    comment_btn.type = "submit";
    comment_btn.classList.add("btn");
    comment_btn.classList.add("btn-primary");
    comment_btn.innerText = "Comment";
    comment_btn.addEventListener("click", this.createComment.bind(this));
    form_comment.appendChild(comment_btn);

    main.appendChild(form_comment);

    let comment_list = document.createElement("div");
    comment_list.id = "comment-list";
    this.addCommentList(comment_list);
    main.appendChild(comment_list);

    container.appendChild(main);
  }

  gotoPostList = () => {
    const postList = new PostList();
    app.changeActiveScreen(postList);
  };

  createComment(e) {
    e.preventDefault();
    //todo
    //validate form

    // add in firestore database
  }

  async addCommentList(comment_list_component) {
    // add post list
    let comment_list = await this.getCommentList();
    comment_list.forEach((element) => {
      // declare some var for card
      const id = element.id;
      const created_by = getUsername(element.data.created_by);
      const created_at = calPostCreatedTime(element.data.created_at);
      const title = element.data.title;
      const caption = null;
      let comment = new Card(id, created_by, created_at, title, caption);
      comment.initRender(comment_list_component);
    });
  }

  async getCommentList() {
    let list = [];

    // get list from firestore
    //todo

    // this.$postList = list;
    return list;
  }
}

export default Post;
