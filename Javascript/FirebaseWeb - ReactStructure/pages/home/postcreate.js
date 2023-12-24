import Nav from "../../components/nav/nav.js";

class PostCreate {
  constructor() {
    // set title
    document.querySelector("title").innerHTML = "Create Post";
  }

  initRender(container) {
    // add navigator
    const body = document.getElementsByTagName("Body")[0];
    const navbar = new Nav();
    navbar.initRender(body);

    let main = document.createElement("main");

    let form_post = document.createElement("form");
    form_post.id = "created-form";

    let input_title = document.createElement("input");
    input_title.type = "text";
    input_title.id = "post-title";
    input_title.name = "post-title";
    input_title.maxLength = 50;
    input_title.placeholder = "Post title";
    form_post.appendChild(input_title);

    let input_caption = document.createElement("textarea");
    input_caption.name = "post-subtext";
    input_caption.id = "post-subtext";
    input_caption.cols = "45";
    input_caption.rows = "10";
    input_caption.placeholder = "Post body(optional)";
    form_post.appendChild(input_caption);

    let div_btn_group = document.createElement("div");
    div_btn_group.classList.add("button-group");

    let reset_btn = document.createElement("button");
    reset_btn.type = "reset";
    reset_btn.classList.add("btn");
    reset_btn.classList.add("btn-secondary");
    reset_btn.innerText = "Cancel";
    div_btn_group.appendChild(reset_btn);

    let submit_btn = document.createElement("button");
    submit_btn.type = "submit";
    submit_btn.classList.add("btn");
    submit_btn.classList.add("btn-primary");
    submit_btn.innerText = "Post";
    submit_btn.addEventListener("click", this.createPost.bind(this));
    div_btn_group.appendChild(submit_btn);

    form_post.appendChild(div_btn_group);

    main.appendChild(form_post);

    container.appendChild(main);
  }

  gotoPostList() {
    //todo
  }

  createPost(e) {
    e.preventDefault();

    //todo
    // validate form

    // add in firestore data
  }
}

export default PostCreate;
