import * as ActionTypes from "../ActionTypes";

const initval = {
  text: "",
  navigateTo: "",
};

export const orderUploadReducer = (state = initval, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ActionTypes.ORDER_UPLOADED:
      return {
        text: action.payload.text.toString(),
        navigateTo: action.payload.navigateTo,
      };
    case ActionTypes.CLEARE_TEXT:
      return {
        text: "",
        navigateTo: "",
      };
    default:
      return state;
  }
};
