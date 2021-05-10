const {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  DELETE_CART
} = require("../actions/typesActions");

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      return [...state, action.product];
    }
    case DELETE_ITEM_FROM_CART: {
      const newState = [...state]
      newState.splice(action.id, 1)
      return newState
    }
    case DELETE_CART: {
      return []
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
