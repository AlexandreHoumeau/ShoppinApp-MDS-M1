import { IS_LOGGED_IN, IS_LOGGED_OUT } from "../actions/typesActions";

let initialState = {
  isLoggedIn: false,
  id: null,
  email: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: true,
        id: action.payload.id,
        token: action.payload.token,
        email: action.payload.email,
      };
    }
    case IS_LOGGED_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        id: null,
        token: null,
        email: null,
      };
    }
    default: {
      return state;
    }
    
  }
};

export default authReducer;
