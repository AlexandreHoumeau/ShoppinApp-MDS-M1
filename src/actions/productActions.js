import {
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
	INIT_PRODUCTS,
} from "./typesActions";
import firebase from "firebase";
import { productRef } from "../config/firebase";

export const addNewProduct = (product) => (dispatch) => {
  firebase
    .database()
    .ref("products")
    .push(product)
    .then((res) => {
      // dispatch(newProduct(product));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const initProducts = () => (dispatch) => {
	productRef.on('value', (snapshot) => {
		const array = []
		snapshot.forEach(element => {
      const obj = {... element.val()}
      obj.key = element.key
      array.push(obj)
		})
    const string = JSON.stringify(array)
    const obj = JSON.parse(string)
		dispatch(initialize(obj))
	}, (errorObject) => {
		console.log('The read failed: ' + errorObject.name);
	}); 
}

export const deleteProduct = (product) => dispatch => {
  firebase
    .database()
    .ref('products/' + product.key)
    .remove()
    .then(res => {  
      // dispatch(deleteItem(product.key))
    })
    .catch((err) => {
      console.log('Something went wrong')
    })

}

export const newProduct = (product) => {
  return {
    type: ADD_NEW_PRODUCT,
    product,
  };
};

export const deleteItem = (key) => {
  return {
    type: DELETE_PRODUCT,
    key,
  };
};

export const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product,
  };
};

export const initialize = (products) => {
  return {
    type: INIT_PRODUCTS,
    products,
  };
};
