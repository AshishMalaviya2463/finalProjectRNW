import * as Actiontypes from "../ActionTypes";

const initVal = [];

export const cartReducer = (state = initVal, action) => {
  // console.log(action.type, action.payload, state);
  switch (action.type) {
    case Actiontypes.ADD_TO_CART:
      const oldProd = state.filter((d) => d.id === action.payload.id);
      if (oldProd.length < 1) {
        return (state = [...state, { id: action.payload.id, qty: 1 }]);
      } else {
        const objIndex = state.findIndex((d) => {
          return d.id === oldProd[0].id;
        });
        state[objIndex].qty += 1;
        return [...state];
      }
    case Actiontypes.REMOVE_FROM_CART:
      return state.filter((d) => d.id !== action.payload);
    case Actiontypes.EMPTY_CART:
      return [];
    case Actiontypes.DECREMENT_TO_CART:
      return state.map((d) => {
        if (d.id === action.payload.id) {
          if (d.qty === 1) {
            return {
              ...d,
              qty: 1,
            };
          } else {
            return {
              ...d,
              qty: d.qty - 1,
            };
          }
        } else {
          return d;
        }
      });
    default:
      return state;
  }
};
