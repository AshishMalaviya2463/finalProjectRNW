import * as Actiontypes from "../ActionTypes";

const initVal = [];

export const cartReducer = (state = initVal, action) => {
  console.log(action, typeof state);
  switch (action.type) {
    case Actiontypes.ADD_TO_CART:
      const oldProd = state.filter((d) => d.id === action.payload.id);
      state = oldProd.length < 1 ? [...state, action.payload] : state;
      console.log(state);
      return state;
    case Actiontypes.REMOVE_FROM_CART:
      return state.filter((d) => d.id !== action.payload);
    default:
      return state;
  }
};
