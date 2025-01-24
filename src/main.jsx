import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appstore from "./redux/Store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={appstore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
