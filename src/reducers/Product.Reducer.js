import PRODUCTS from "../Mock/Products";
import fireabse from 'firebase'
import { productRef } from "../config/firebase";

const {
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  INIT_PRODUCTS,
} = require("../actions/typesActions");

let initialState = [];

// PRODUCTS.forEach(element => {
//   fireabse.database().ref('products').push(element)
// })
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT: {
      return [...state, action.product];
    }
    case DELETE_PRODUCT: {
      const newState = [...state]
      newState.splice(action.key, 1)
      return newState
    }
    case EDIT_PRODUCT: {
      const newState = [...state]
      const index = state.findIndex((item) => item.id === action.product.id)
      newState[index] = action.product
      return newState
    }
    case INIT_PRODUCTS: {
      return action.products
    }
    default: {
      return state;
    }
    
  }
};

export default productReducer;
