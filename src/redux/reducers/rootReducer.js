import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import { productCounterReducer } from "./productCounterReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  productCounter: productCounterReducer,
  cart: cartReducer,
});
