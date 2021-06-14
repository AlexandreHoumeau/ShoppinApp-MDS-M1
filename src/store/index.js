import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import orderProduct from "../reducers/Order.Reducer";
import cartReducer from "../reducers/Cart.Reducer";
import productReducer from '../reducers/Product.Reducer'
import authReducer from "../reducers/Auth.Reducer";
import ErrorAuthReducer from "../reducers/Error.Auth.Reducer";

const rootReducer = combineReducers({ cart: cartReducer, order: orderProduct, products: productReducer, user: authReducer,authError: ErrorAuthReducer  });
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
