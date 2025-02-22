import { forwardRef, useImperativeHandle, useRef } from "react";

const video1Link =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    handlePlay() {
      videoRef.current.play();
    },
    handlePause() {
      videoRef.current.pause();
    },
  }));
  return <video ref={videoRef} width="80%" height="auto" src={video1Link} />;
}

export default forwardRef(Video);
