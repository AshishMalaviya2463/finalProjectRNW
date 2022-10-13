import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import * as ActionTypes from "../ActionTypes";

export const uploadOrderAction = (data) => async (dispatch) => {
  console.log("orderv action called");
  data = {
    ...data,
    status: "pending",
  };
  const orderRef = await addDoc(collection(db, "orders"), data);
  dispatch({
    type: ActionTypes.ORDER_UPLOADED,
    payload: { text: "Order Placed.", navigateTo: "/" },
  });

  setTimeout(() => {
    dispatch({ type: ActionTypes.CLEARE_TEXT });
    dispatch({ type: ActionTypes.EMPTY_CART });
    dispatch({ type: ActionTypes.CLEAR_COUNT });
  }, 2000);
};
