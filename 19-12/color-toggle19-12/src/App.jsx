import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          color: isRed ? "red" : "blue",
          border: "1px solid black",
        }}
      >
        This div changes color
      </div>
    </div>
  );
}

export default App;
