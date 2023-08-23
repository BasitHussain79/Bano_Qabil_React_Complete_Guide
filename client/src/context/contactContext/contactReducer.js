import {
  ADD_CONTACT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACT,
  UPDATE_CONTACT,
} from "../types";

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
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((data) => data.id !== action.payload),
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      console.log("filtered null");
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default reducer;
