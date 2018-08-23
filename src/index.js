import React from "react";
import ReactDOM from "react-dom";
import Hello from "./js/components/Hello"
import { Provider } from 'react-redux';
import configureStore from './configureStore'

const store = configureStore();

ReactDOM.render(
  <Hello store={store}/>,
  document.getElementById("root")
);
