import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { onClickOutside } from "./utils/onClickOutside";
import { closeMenu } from "./redux/MenuSlice";

onClickOutside(document, ".menu-container", () => store.dispatch(closeMenu()));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
