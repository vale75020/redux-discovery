import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from 'react-redux';
import store from './redux/store';


// import { combineReducers, createStore } from "redux";
// import { userReducer, productsReducer } from './redux/reducers'
// import { changeName, addProduct } from './redux/actions'

// const defaultState = {
//   user: "Valentino",
//   products: ["iPhone"]
// };

// const userReducer = (state = defaultState, action) => {  // function link le previousState avec une action
//   if (action.type === "CHANGE_NAME") {  // traiter action
//     return {  // new state
//     //   user: action.payload,
//     //   products: state.products
//       ...defaultState,
//       user: action.payload
//     };
//   }
//   return state;
// };

// const userReducer = (state = "Valentino", action) => { // function link le previousState avec une action
//   if (action.type === "CHANGE_NAME") {// traiter action
//     return action.payload;
//   }
//   return state;
// };

// const productsReducer = (state = [], action) => { 
//   if(action.type === 'ADD_PRODUCT') {
//     return [
//       ...state,
//       action.payload
//     ]
//   }
//   return state;
// };

// const addProduct = {  //action
//   type: 'ADD_PRODUCT',
//   payload: {
//     id: Date.now(),
//     name: 'iMac Pro'
//   }
// };

// const allReducers = combineReducers({
//   user: userReducer,
//   products: productsReducer
// });

// const changeName = {
//   type: "CHANGE_NAME", // definir action
//   payload: "Matthieu"
// };

// const store = createStore(allReducers); // initialiser le state

// console.log(store.getState());
// store.dispatch(changeName); // appeler l'action
// console.log(store.getState());

// store.dispatch(addProduct);
// console.log(store.getState());

ReactDOM.render( 
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById("root"));


serviceWorker.unregister();
