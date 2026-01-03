import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RestaurantProvider } from "./context/RestaurantContext";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </BrowserRouter>
);

