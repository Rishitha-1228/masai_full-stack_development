import { useState } from "react";
import TodosList from "./components/TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
