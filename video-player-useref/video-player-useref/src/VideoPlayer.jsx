import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Video Player using useRef</h2>

      <video
        ref={videoRef}
        width="500"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <br /><br />

      <button onClick={() => videoRef.current.play()}>▶️ Play</button>
      <button onClick={() => videoRef.current.pause()}>⏸ Pause</button>
      <button onClick={() => (videoRef.current.currentTime -= 5)}>⏪ Rewind</button>
      <button onClick={() => (videoRef.current.currentTime += 5)}>⏩ Forward</button>
    </div>
  );
}

export default VideoPlayer;
