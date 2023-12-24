import app from "../../app.js";
import Post from "../../pages/home/post.js";

class Card {
  constructor(id, created_by, created_at, title, caption) {
    this.id = id;
    this.created_by = created_by;
    this.created_at = created_at;
    this.title = title;
    this.caption = caption;
  }

  initRender(list) {
    let p = document.createElement("div");
    p.classList.add("post");

    let p_details = document.createElement("div");
    p_details.classList.add("post-details");
    p_details.innerHTML =
      "Posted by" +
      `<span class="created-by">${this.created_by}</span>
      <span class="created-at">${this.created_at}</span>`;

    let p_content = document.createElement("div");
    p_content.classList.add("post-content");

    let p_title = document.createElement("div");
    p_title.classList.add("post-title");
    p_title.id = this.id;
    p_title.innerText = this.title;

    // phan biet giua comment va post
    if (this.caption != null) {
      let p_subtext = document.createElement("div");
      p_subtext.classList.add("post-subtext");
      p_subtext.innerText = this.caption;

      // add event for title => click => post
      p_title.addEventListener("click", () => this.gotoPost(this.id));

      p_content.appendChild(p_title);
      p_content.appendChild(p_subtext);
    } else {
      p_content.appendChild(p_title);
    }

    p.appendChild(p_details);
    p.appendChild(p_content);

    list.appendChild(p);
  }

  gotoPost(post_id) {
    //todo
    //save current post in local storage
    localStorage.setItem("currentPost", post_id);
    // goto post details page
    let post = new Post();
    app.changeActiveScreen(post);
  }
}

export default Card;
