export const CHANGE_NAME_ACTION = 'user:changeName';
export const ADD_PRODUCT_ACTION = 'products:addProduct';
  
  // export const changeName = {
  //   type: CHANGE_NAME_ACTION , // definir action
  //   payload: "Matthieu"
  // };

  export const changeName = (value = 'Matthieu') => {
    return {
      type: CHANGE_NAME_ACTION, //definir action
      payload: value
    }
  }

  export const addProduct = {  //action
    type: ADD_PRODUCT_ACTION,
    payload: {
      id: Date.now(),
      name: 'iMac Pro'
    }
  };