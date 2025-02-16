import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom/client"; // nạp thư viện react-dom
// import { createRoot } from 'react-dom/client';

// Tạo component App
function App() {
  return (
    <div>
      <h1>Xin chào anh em F8!</h1>
    </div>
  );
}

// get root element
const rootElement = document.getElementById("root");
// React-DOM => render UI
const rootReact = ReactDOM.createRoot(rootElement);
// add element
rootReact.render(<App />);
