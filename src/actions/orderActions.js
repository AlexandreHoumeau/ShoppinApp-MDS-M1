import { ADD_ORDER, INIT_ORDERS } from "./typesActions";
import firebase from "firebase";
import { orderRef } from "../config/firebase";

export const addOrder = (order) => (dispatch) => {
  firebase
    .database()
    .ref("orders")
    .push(order)
    .then((res) => {
      dispatch(add(order));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchOrders = (uid) => (dispatch) => {
  orderRef.once('value', (snapshot) => {
		const array = []
		snapshot.forEach(element => {
      const obj = {... element.val()}
      obj.key = element.key
      array.push(obj)
		})
    const formatedData = formatData(array)
		const result = formatedData.filter((order) => order.user === "ahoumeau@uptoo.fr" )
    dispatch(initialize(result))
  }, (errorObject) => {
		console.log('The read failed: ' + errorObject.name);
	}); 
}

const formatData = (data) => {
  const string = JSON.stringify(data)
  const obj = JSON.parse(string)
  return obj
}

export const initialize = (result) => {
  return {
    type: INIT_ORDERS,
    orders: result,
  };
};

export const add = (order) => {
  return {
    type: ADD_ORDER,
    order,
  };
};
