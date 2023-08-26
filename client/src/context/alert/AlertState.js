import React, { useId, useReducer } from "react";
import reducer from "./AlertReducer";
import AlertContext from "./AlertContext";
import { CLEAR_ALERT, SET_ALERT } from "../types";

const AlertState = (props) => {
  const id = useId();
  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

  const setAlert = (msg, type, timeout = 5000) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        id: `${id}-${msg}`,
        msg,
        type,
      },
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
        payload: id,
      });
    }, timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
