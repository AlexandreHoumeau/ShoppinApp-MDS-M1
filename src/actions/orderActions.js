import { ADD_ORDER } from "./typesActions";

export const addOrder = order => {
	return {
		type: ADD_ORDER,
		order,
	};
};
