import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {interceptors} from "./helpers";

const store = configureStore();
interceptors.axios.setup();

const renderContainer = Component => {
  const root = document.getElementById("root");

  const Application = (
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>
  );

  // render component
  render(Application, root);
};

renderContainer(App);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
