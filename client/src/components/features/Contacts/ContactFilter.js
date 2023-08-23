import { Box, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../../context/contactContext/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, filtered, clearFilter } = contactContext;
  const [text, setText] = useState("");

  useEffect(() => {
    if (filtered === null) {
      setText("");
    }
  }, [filtered, text]);

  const changeHandler = (e) => {
    setText(e.target.value);
    if (e.target.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Box component="div">
      <TextField
        name="searchContacts"
        placeholder="Search Contacts"
        value={text}
        onChange={changeHandler}
        fullWidth
      />
    </Box>
  );
};

export default ContactFilter;
