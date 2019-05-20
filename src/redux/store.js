import { combineReducers, createStore } from "redux";
import { userReducer, productsReducer } from './reducers'
import { changeName, addProduct } from './actions'

const allReducers = combineReducers({
    user: userReducer,
    products: productsReducer
  });

const store = createStore(
    allReducers,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // redux dev tools
); // initialiser le state

console.log(store.getState());
store.dispatch(changeName()); // appeler l'action
console.log(store.getState());

store.dispatch(addProduct);
console.log(store.getState());

export default store;