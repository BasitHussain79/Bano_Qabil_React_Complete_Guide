import { useReducer } from "react";
import {
  ADD_CONTACT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACT,
  UPDATE_CONTACT,
} from "../types";
import ContactContext from "./contactContext";
import reducer from "./contactReducer";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Basit",
        phone: "111-222-111",
        email: "basit@gmail.com",
        relationship: "professional",
      },
      {
        id: 2,
        name: "Kashan",
        phone: "111-211-111",
        email: "kashan@gmail.com",
        relationship: "professional",
      },
      {
        id: 3,
        name: "Asil",
        phone: "000-222-111",
        email: "asil@gmail.com",
        relationship: "personal",
      },
    ],
    filtered: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Add Contact
  const addContact = (data) => {
    dispatch({
      type: ADD_CONTACT,
      payload: data,
    });
  };

  // Update Contact
  const updateContact = (data) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: data,
    });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACT,
      payload: text,
    });
  };

  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        updateContact,
        deleteContact,
        filterContacts,
        clearFilter,
        filtered: state.filtered,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
