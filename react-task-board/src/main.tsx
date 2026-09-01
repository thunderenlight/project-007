// Entry point: mount the <App> tree into #root. This is the only place
// ReactDOM is used — everything else is pure components.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
