import { ADD_CONTACT, UPDATE_CONTACT } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((data) => {
          if (data.id === action.payload.id) {
            return action.payload;
          }
          return data;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
