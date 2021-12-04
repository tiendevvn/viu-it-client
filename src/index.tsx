import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./core/styles/index.css";
import App from "./app";

// store
import store from "./app/store";

// utils
import initRequest from "./app/utils/initRequest";

initRequest(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
