import { ADD_NEW_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "./typesActions";

export const addNewProduct = product => {
	return {
		type: ADD_NEW_PRODUCT,
		product,
	};
};

export const deleteProduct = id => {
	return {
		type: DELETE_PRODUCT,
		id,
	};
};

export const editProduct = (product) => {
  console.log('Action: Edit Product')
  return {
		type: EDIT_PRODUCT,
    product
	};
}