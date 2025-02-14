// Used useState and useEffect:
// + useState([]): Initializes the state for storing API data.
// + useEffect(): Fetches data when the component mounts.

function PostItem({ id, title, body }) {
  return (
    <div className="postItem" id={id}>
      <img
        className="postImg"
        src="https://png.pngtree.com/png-clipart/20230405/original/pngtree-cute-cat-sticker-cartoon-kitten-kitty-png-image_9029344.png"
        alt=""
      />
      <div className="postName">{title}</div>
      <div className="postDesc">{body}</div>
      <button type="button" className="postDetailBtn">
        View more
      </button>
    </div>
  );
}

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const postResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const json = await postResponse.json();
        setPosts(json.slice(0, 10) || []);
        console.log(posts);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div id="postList">
      {posts.map((item) => (
        <PostItem
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  );
}

// Get root element
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
