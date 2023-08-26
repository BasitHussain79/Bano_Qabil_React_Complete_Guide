import { REGISTER_FAIL, REGISTER_SUCCESS } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.token = action.payload.token;
      return {
        ...state,
        isAuth: true,
        isLoading: false,
      };
    case REGISTER_FAIL: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
