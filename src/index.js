import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initState = {
  totalOrder: 0,
};

//reducer
const reducer = (state = initState, action) => {
  if (action.type === "PLUS_ORDER") {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  if (action.type === "MINUS_ORDER") {
    let totalOrders = 0;
    if (state.totalOrder > 0) {
      totalOrders = state.totalOrder - 1;
    }
    return {
      ...state,
      totalOrder: totalOrders,
    };
  }
  return state;
};

const storeRedux = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
