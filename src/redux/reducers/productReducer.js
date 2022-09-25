import * as ActionTypes from "../ActionTypes";

const initVal = [];

export const productReducer = (state = initVal, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
