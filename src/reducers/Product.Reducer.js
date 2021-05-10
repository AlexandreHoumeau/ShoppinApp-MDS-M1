import PRODUCTS from "../Mock/Products";

const {
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT
} = require("../actions/typesActions");

const initialState = PRODUCTS;

const productReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_NEW_PRODUCT: {
      return [...state, action.product];
    }
    case DELETE_PRODUCT: {
      const newState = [...state]
      newState.splice(action.id, 1)
      return newState
    }
    case EDIT_PRODUCT: {
      const newState = [...state]
      const index = state.findIndex((item) => item.id === action.product.id)
      newState[index] = action.product
      return newState
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
