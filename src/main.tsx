import React from "react";
import ReactDOM from "react-dom";
import "./variables.css";
import "./index.css";
import { App } from "./App";
import { pixiArena } from "./domain/Arena";

document.body.appendChild(pixiArena.view);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
