import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import * as ActionTypes from "../ActionTypes";

export const getProductsAction = () => async (dispatch) => {
  try {
    let products = [];
    const querySnapshot = await getDocs(collection(db, "product_details"));
    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });

    dispatch({ type: ActionTypes.GET_PRODUCTS, payload: products });
  } catch (e) {
    console.log(e);
  }
};
