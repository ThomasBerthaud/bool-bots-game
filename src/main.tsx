import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Arena } from "./domain/Arena";

const arena = new Arena(document, { width: window.innerWidth, height: window.innerHeight });
console.log(arena);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
