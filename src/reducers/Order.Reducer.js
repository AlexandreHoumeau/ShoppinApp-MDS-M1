const { ADD_ORDER, INIT_ORDERS } = require("../actions/typesActions");

const initialState = [];

const orderProduct = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER: {
      return [...state, action.order];
    }
    case INIT_ORDERS: {
      return action.orders
    }
    default: {
      return state;
    }
  }
};

export default orderProduct;
