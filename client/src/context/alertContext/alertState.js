import { useId, useReducer } from "react";
import { CLEAR_ALERT, SET_ALERT } from "../types";
import AlertContext from "./alertContext";
import reducer from "./alertReducer";

const AlertState = (props) => {
  const id = useId();
  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

  const setAlert = (msg, type, timeout = 5000) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id: `${id}-msg` },
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
