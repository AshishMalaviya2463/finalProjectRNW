import * as Actiontypes from "../ActionTypes";
const initVal = [];

export const productCounterReducer = (state = initVal, action) => {
  switch (action.type) {
    case Actiontypes.INCREMENT_PRODUCT_COUNTER:
      const oldProd = state.filter((d) => d.id === action.payload);
      return oldProd.length > 0
        ? state.map((d) => {
            if (d.id === action.payload) {
              return {
                ...d,
                qty: d.qty + 1,
              };
            } else {
              return d;
            }
          })
        : (state = [
            ...state,
            {
              id: action.payload,
              qty: 2,
            },
          ]);
    case Actiontypes.DECREMENT_PRODUCT_COUNTER:
      return state.map((d) => {
        if (d.id === action.payload) {
          if (d.qty > 1) {
            return {
              ...d,
              qty: d.qty - 1,
            };
          } else {
            return {
              ...d,
              qty: 1,
            };
          }
        } else {
          return d;
        }
      });
    case Actiontypes.REMOVE_FROM_CART:
      return state.filter((d) => d.id !== action.payload);
    case Actiontypes.CLEAR_COUNT:
      return [];
    default:
      return state;
  }
};
