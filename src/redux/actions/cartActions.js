import * as ActionTypes from "../ActionTypes";

export const addToCartAction = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: ActionTypes.ADD_TO_CART, payload: data });
};

export const removeFromCartAction = (id) => (dispatch) => {
  console.log(id);
  dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: id });
};
