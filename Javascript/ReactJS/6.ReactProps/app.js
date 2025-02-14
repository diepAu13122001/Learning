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

// using destructuring => quickly 
function exampleItem({ prop1, prop2, prop3 }) {
  return (
    <div>
      this is {prop1}, {prop2} and {prop3}
    </div>
  );
}

// call full props -> need to call sub prop again
function PostItem(props) {
  const img = props.img;
  const name = props.name;
  return (
    <div className="postItem">
      <img className="postImg" src={img} alt="" />
      <div className="postName">{name}</div>
      <button type="button" className="postDetailBtn">
        View more
      </button>
    </div>
  );
}

function App() {
  return (
    <div id="postList">
      {postItems.map((item) => (
        <PostItem name={item.name} img={item.img} key={item.name} />
      ))}
    </div>
  );
}

// get root element
const rootElement = document.getElementById("root");
// React-DOM => render UI
const rootReact = ReactDOM.createRoot(rootElement);
// add element
rootReact.render(<App />);
