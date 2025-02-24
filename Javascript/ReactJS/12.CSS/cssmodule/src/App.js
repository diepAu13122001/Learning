import "./App.css";
import Content from "./components/content";
import GlobalStyles from "./components/globalStyles";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Header />
        <Content />
      </GlobalStyles>
    </div>
  );
}

export default App;
