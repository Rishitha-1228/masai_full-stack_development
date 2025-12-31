import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");

  // Simulate heavy UI work
  let items = [];
  for (let i = 0; i < 10000; i++) {
    items.push(<li key={i}>Heavy Item {i}</li>);
  }

  return (
    <div>
      <h2>Heavy Component</h2>
      <ul style={{ maxHeight: "200px", overflow: "auto" }}>
        {items}
      </ul>
    </div>
  );
};

// Prevent re-render unless props change
export default React.memo(HeavyComponent);
