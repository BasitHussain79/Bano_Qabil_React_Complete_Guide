import { useReducer } from "react";
import reducer from "./contactReducer";
import ContactContext from "./contactContext";
import { ADD_CONTACT, UPDATE_CONTACT } from "../types";

const ContactState = (props) => {
  const intialState = {
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
  };

  const [state, dispatch] = useReducer(reducer, intialState);

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

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, updateContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
