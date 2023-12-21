import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import './styles/global.css'
import store from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLDivElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
