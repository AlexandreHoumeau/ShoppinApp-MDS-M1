const { ADD_ORDER } = require("../actions/typesActions");

const initialState = [];

const orderProduct = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER: {
      return [...state, action.order];
    }
    default: {
      return state;
    }
  }
};

export default orderProduct;
