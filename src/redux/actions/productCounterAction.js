import * as Actiontypes from "../ActionTypes";

export const incrementCounter = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: Actiontypes.INCREMENT_PRODUCT_COUNTER, payload: data });
};

export const decrementCounter = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: Actiontypes.DECREMENT_PRODUCT_COUNTER, payload: data });
};
