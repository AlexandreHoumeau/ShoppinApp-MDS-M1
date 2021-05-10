import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import orderProduct from "../reducers/Order.Reducer";
import cartReducer from "../reducers/Cart.Reducer";
import productReducer from '../reducers/Product.Reducer'

const rootReducer = combineReducers({ cart: cartReducer, order: orderProduct, products: productReducer  });
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
