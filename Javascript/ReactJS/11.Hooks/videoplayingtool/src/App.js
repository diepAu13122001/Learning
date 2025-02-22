import { useRef } from "react";
import "./App.css";
import Video from "./video.js";
function App() {
  const videoRef = useRef();
  console.log(videoRef.current);
  
  const handlePlay = () => {
    videoRef.current.handlePlay();
  };
  const handlePause = () => {
    videoRef.current.handlePause();
  };

  return (
    <div className="App">
      <h1>Tool Playing Videos</h1>
      <Video ref={videoRef} />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default App;
