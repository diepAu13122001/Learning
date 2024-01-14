import app, { firestore } from "../../app.js";
import Card from "../../components/card/card.js";
import Nav from "../../components/nav/nav.js";
import PostList, { calPostCreatedTime, getUsername } from "./postlist.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  query,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";

class Post {
  constructor() {
    // set title
    document.querySelector("title").innerHTML = "Post";

    // get post information by local
    this.currentPost_id = localStorage.getItem("currentPost");
    this.currentPost = null;
  }

  async initRender(container) {
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
    btn_home.addEventListener("click", this.gotoPostList.bind(this));

    btn_home_div.appendChild(btn_home);
    main.appendChild(btn_home_div);

    await this.findPostById();
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
    input_comment.id = "input-comment";
    input_comment.placeholder = "Enter your comment ...";
    form_comment.appendChild(input_comment);

    let comment_btn = document.createElement("button");
    comment_btn.type = "submit";
    comment_btn.classList.add("btn");
    comment_btn.classList.add("btn-primary");
    comment_btn.innerText = "Comment";
    comment_btn.id = "comment-btn";
    comment_btn.addEventListener("click", this.createComment.bind(this));
    form_comment.appendChild(comment_btn);

    main.appendChild(form_comment);

    let comment_list = document.createElement("div");
    comment_list.id = "comment-list";
    this.addCommentList(comment_list);
    main.appendChild(comment_list);

    container.appendChild(main);
  }

  async findPostById() {
    // get doc from firestore
    const docRef = doc(firestore, "posts", this.currentPost_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // declare some var for current post
      this.$created_by = getUsername(docSnap.data().created_by);
      this.$created_at = calPostCreatedTime(docSnap.data().created_at);
      this.$title = docSnap.data().title;
      this.$caption = docSnap.data().caption;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  gotoPostList = () => {
    const postList = new PostList();
    app.changeActiveScreen(postList);
  };

  async createComment(e) {
    e.preventDefault();
    //todo
    // get data form input field
    const uid = JSON.parse(localStorage.getItem("currentUser")).uid;
    const cmt = document.getElementById("input-comment").value;
    //validate form
    if (!cmt) {
      alert("Please add a comment");
    } else {
      // delete data on input field (avoid spam)
      document.getElementById("input-comment").value = "";
      // add in firestore database
      const commentsRef = collection(firestore, "comments");
      await setDoc(doc(commentsRef), {
        title: cmt,
        created_at: serverTimestamp(),
        created_by: uid,
        post_id: this.currentPost_id,
      });
      //reload page
      const post = new Post();
      app.changeActiveScreen(post);
    }
  }

  async addCommentList(comment_list_component) {
    // add post list
    let comment_list = await this.getCommentList();
    comment_list.forEach((element) => {
      // declare some var for card
      const id = element.id;
      const created_by = getUsername(element.data().created_by);
      const created_at = calPostCreatedTime(element.data().created_at);
      const title = element.data().title;
      const caption = null;
      let comment = new Card(id, created_by, created_at, title, caption);
      comment.initRender(comment_list_component);
    });
  }

  async getCommentList() {
    let list = [];
    // get list from firestore
    //todo
    const q = query(collection(firestore, "comments"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // sort comment for this post
      if (doc.data().post_id == this.currentPost_id) {
        // doc.data() is never undefined for query doc snapshots
        list.push(doc);
      }
    });
    this.commentList = list;
    return list;
  }
}

export default Post;
