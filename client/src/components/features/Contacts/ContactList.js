import { Box, Button, Typography } from "@mui/material";
import React from "react";

const styles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  relation: {
    padding: "10px 12px",
    backgroundColor: "lightBlue",
    borderRadius: "25px",
  },
};

const ContactList = ({ data, getContact, deleteContact }) => {
  const { id, name, phone, email, relationship } = data;
  
  const typoProps = {
    variant: "body1",
    color: "darkblue",
    fontWeight: 500,
  };

  const editHandler = () => {
    getContact(data);
  };

  const deleteHandler = () => {
    deleteContact(id);
  };

  return (
    <Box component="div" my={3}>
      <Box component="div" sx={styles.flex}>
        <Typography variant="h5" fontWeight={600}>
          {name}
        </Typography>
        <Typography
          variant="body1"
          sx={
            relationship === "professional"
              ? {
                  ...styles.relation,
                  backgroundColor: "darkBlue",
                  color: "#fff",
                }
              : styles.relation
          }
        >
          {relationship.charAt(0).toUpperCase() + relationship.slice(1)}
        </Typography>
      </Box>
      <Typography {...typoProps}>{phone}</Typography>
      <Typography {...typoProps} mb={2}>
        {email}
      </Typography>
      <Button
        type="button"
        variant="contained"
        color="primary"
        sx={{ mr: 2 }}
        onClick={editHandler}
      >
        Edit
      </Button>
      <Button
        type="button"
        onClick={deleteHandler}
        variant="contained"
        color="error"
      >
        Delete
      </Button>
    </Box>
  );
};

export default ContactList;
