import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import themeApp from "./styles/themeApp";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themeApp}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
