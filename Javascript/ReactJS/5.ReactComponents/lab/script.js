const postItems = [
  {
    name: "A",
    img: "https://shopgarena.net/wp-content/uploads/2022/08/Hinh-Alice-chibi.jpg",
  },
  {
    name: "B",
    img: "https://shopgarena.net/wp-content/uploads/2022/08/Hinh-Alice-chibi.jpg",
  },
  {
    name: "C",
    img: "https://shopgarena.net/wp-content/uploads/2022/08/Hinh-Alice-chibi.jpg",
  },
  {
    name: "D",
    img: "https://shopgarena.net/wp-content/uploads/2022/08/Hinh-Alice-chibi.jpg",
  },
  {
    name: "E",
    img: "https://shopgarena.net/wp-content/uploads/2022/08/Hinh-Alice-chibi.jpg",
  },
];

function PostItem(item) {
  console.log(item.item);

  return (
    <div className="postItem">
      <img className="postImg" src={item.item.img} alt="" />
      <div className="postName">{item.item.name}</div>
      <button type="button" className="postDetailBtn">
        View more
      </button>
    </div>
  );
}

const postList = (
  <div id="postList">
    {postItems.map((item) => (
      <PostItem item={item} key={item.name} />
    ))}
  </div>
);

// get root element
const rootElement = document.getElementById("root");
// React-DOM => render UI
const rootReact = ReactDOM.createRoot(rootElement);
// add element
rootReact.render(postList);
