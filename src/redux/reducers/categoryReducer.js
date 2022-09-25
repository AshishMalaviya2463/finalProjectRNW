import * as Actiontypes from "../ActionTypes";

const initVal = [];

export const categoryReducer = (state = initVal, action) => {
  console.log(action.type, action.payload);

  switch (action.type) {
    case Actiontypes.GET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
