import { CLEAR_ALERT, SET_ALERT } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case CLEAR_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
