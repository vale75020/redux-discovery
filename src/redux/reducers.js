import { CHANGE_NAME_ACTION, ADD_PRODUCT_ACTION } from './actions'

export const userReducer = (state = "Valentino", action) => { // function link le previousState avec une action
    if (action.type === CHANGE_NAME_ACTION) {// traiter action
      return action.payload;
    }
    return state;
  };
  
export  const productsReducer = (state = [], action) => { 
    if(action.type === ADD_PRODUCT_ACTION) {
      return [
        ...state,
        action.payload
      ]
    }
    return state;
  };