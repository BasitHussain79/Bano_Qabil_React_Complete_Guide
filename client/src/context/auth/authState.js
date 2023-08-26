import React, { useReducer } from "react";
import AuthContext from "./authContext";
import reducer from "./authReducer";
import axios from "axios";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuth: false,
    isLoading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      console.log(res, "register");
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
      console.log(err, "register");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        isLoading: state.isLoading,
        user: state.user,
        error: state.error,
        registerUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
