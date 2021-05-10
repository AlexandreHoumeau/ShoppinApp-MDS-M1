import { ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, DELETE_CART } from "./typesActions";

export const addProduct = product => {
	return {
		type: ADD_ITEM_TO_CART,
		product,
	};
};

export const deleteProduct = id => {
	return {
		type: DELETE_ITEM_FROM_CART,
		id,
	};
};

export const deleteCart = () => {
  return {
		type: DELETE_CART,
	};
}