import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import PostList from "./components/PostList";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <ThemeToggle />
      <PostList />
    </div>
  );
}
