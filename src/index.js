import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";

const defaultState = {
  user: "Valentino",
  products: ['iPhone']
};

const stateReducer = (state = defaultState, action) => {  // function link le previousState avec une action
  if (action.type === "CHANGE_NAME") {  // traiter action
    return {  // new state
    //   user: action.payload,
    //   products: state.products
      ...defaultState,
      user: action.payload
    };
  }
  return state;
};

const changeName = {
  type: "CHANGE_NAME", // definir action
  payload: "Matthieu"
};

const store = createStore(stateReducer); // initialiser le state

console.log(store.getState());
store.dispatch(changeName); // appeler l'action
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
