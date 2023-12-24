import app from "../app.js";
import Post from "./post.js";
import PostCreate from "./postcreate.js";
import {
  collection,
  getDocs,
  Timestamp 
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";
import { db } from "./firebaseApp.js";

class PostList {
  $postList;

  constructor() {
    document.querySelector("title").innerHTML = "Post List";
    // this.$postList = this.getPostList();
  }

  async initRender(container) {
    container.innerHTML = this.codeHTML();

    // add event click for create new post btn
    document.getElementById("create-btn").addEventListener("click", () => {
      this.gotoPostCreate();
    });

    // document.getElementById("posts-qty").innerHTML = this.getPostsQty();

    // add post list
    this.$postList = await this.getPostList();
    let list = [];
    if (this.$postList.length > 0) {
      document.getElementById("post-list").innerHTML = ``;
      this.$postList.forEach((element) => {
        let item = `<div class="post">
      <div class="post-details">
        Posted by <span class="created-by">${element.data.created_by}</span>
        <span class="created-at">${calPostCreatedTime(
          element.data.created_at
        )}</span>
      </div>
      <div class="post-content">
        <div class="post-title" id="${element.id}">
          ${element.data.title}
        </div>
        <div class="post-subtext">
          ${element.data.caption}
        </div>
      </div>
    </div>`;
        document.getElementById("post-list").innerHTML += item;

        // add event for title
        list.push(element);
      });
    }

    // add event
    list.map((p) => {
      document.getElementById(p.id).addEventListener("click", ()=>{this.gotoPost(p)});
    });
  }

  // code html
  codeHTML() {
    return `
    <div class="main-title">
      <div id="posts-qty">
    </div>
      <button type="button" class="btn btn-primary" id="create-btn">New Post</button>
    </div>

    <div id="post-list">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-1965034-1662569.png" width=50%>
    </div>`;
  }

  gotoPostCreate() {
    const create = new PostCreate();
    app.changeActiveScreen(create);
  }

  async getPostList() {
    // from firestore
    let list = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      let docId = doc.id.toString();
      let data = doc.data();
      let post = { id: docId, data: data };
      list.push(post);
    }); 
    return list;
  }

  getPostsQty() {
    const len = this.$postList.length;
    if (len == 0) {
      return len + " post";
    } else if (len == 1) {
      return len + " post";
    } else {
      return len + " posts";
    }
  }

  // calPostCreatedTime = (time) => {
  //   // todo
  //   return "2 weeks ago";
  // };

  gotoPost(p) {
    localStorage.setItem("currentPost", JSON.stringify(p));
    const post = new Post();
    app.changeActiveScreen(post);
  }
}

export default PostList;

export function calPostCreatedTime(time) {
  // todo
  // convert: original: firebase.firestore
  const timestamp = new Timestamp(time.seconds, time.nanoseconds);

  const currentDate = new Date();
  let date = new Date(timestamp.toDate().toDateString());
  // var d = date.getDate();
  // var m = date.getMonth() + 1;
  // var y = date.getFullYear();

  // check time past
  var diff = currentDate - date;
  const minutes = Math.round(diff / (1000 * 60));
  const hours = Math.round(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 31));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  // year
  if (years > 1) {
    return years + " years ago";
  } else if (years == 1) {
    return "1 year ago";
  } else {
    // month
    if (months > 1) {
      return months + " months ago";
    } else if (months == 1) {
      return "1 month ago";
    } else {
      // week
      if (weeks > 1) {
        return weeks + " weeks ago";
      } else if (weeks == 1) {
        return "1 week ago";
      } else {
        // day
        if (days > 1) {
          return days + " days ago";
        } else if (days == 1) {
          return "1 day ago";
        } else {
          // hour
          if (hours > 1) {
            return hours + " hours ago";
          } else if (hours == 1) {
            return "1 hour ago";
          } else {
            // min
            if (minutes > 1) {
              return minutes + " minutes ago";
            } else if (minutes == 1) {
              return "1 minutes ago";
            } else {
              return "just now";
            }
          }
        }
      }
    }
  }
}
