import { collection, getDocs } from "firebase/firestore";
import * as ActionTypes from "../ActionTypes";
import { db } from "../../firebase";

export const getCategoryAction = () => async (dispatch) => {
  let categories = [];
  const querySnapshot = await getDocs(collection(db, "Category_Detail"));
  querySnapshot.forEach((doc) => {
    categories.push({ ...doc.data(), id: doc.id });
  });

  dispatch({ type: ActionTypes.GET_CATEGORY, payload: categories });
};
