import React from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import * as ActionTypes from "../redux/ActionTypes";

const Alert = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const auth = useSelector((state) => state.auth);
  const order = useSelector((state) => state.order);

  // console.log(auth, order);

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.text !== "" || order.text !== "") {
      enqueueSnackbar(auth.text !== "" ? auth.text : order.text, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });

      setTimeout(() => {
        closeSnackbar();
      }, 2000);
    } else if (auth.error) {
      enqueueSnackbar(auth.error, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });

      setTimeout(() => {
        closeSnackbar();
      }, 2000);
    }
  }, [auth, order]);

  return <></>;
};

export default Alert;
