import { NEW_AUTH_ERROR } from "../actions/typesActions";

let initialState = ""

const ErrorAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_AUTH_ERROR: {
      return action.error;
    }
    default: {
      return state;
    }
  }
}

export default ErrorAuthReducer;
