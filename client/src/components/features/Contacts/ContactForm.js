import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useId, useState } from "react";
import ContactContext from "../../../context/contactContext/contactContext";

const styles = {
  input: { mb: 2, fontSize: { sm: "14px", md: "18px" }, fontWeight: 500 },
  radioLabel: {
    "& .MuiFormControlLabel-label": {
      fontSize: { sm: "14px", md: "18px" },
    },
  },
  btn: {
    width: "100%",
    padding: "10px 14px",
    fontSize: { sm: "14px", md: "18px" },
    mt: 1,
  },
};

const ContactForm = ({ contactData }) => {
  const contactContext = useContext(ContactContext);
  const contactId = useId();

  const { addContact, updateContact } = contactContext;

  const [contactForm, setContactForm] = useState({
    name: contactData?.name ?? "",
    phone: contactData?.phone ?? "",
    email: contactData?.email ?? "",
    relationship: contactData?.relationship ?? "personal",
  });

  useEffect(() => {
    setContactForm({
      name: contactData?.name ?? "",
      phone: contactData?.phone ?? "",
      email: contactData?.email ?? "",
      relationship: contactData?.relationship ?? "personal",
    });
  }, [contactData]);

  const onChangeHandler = (e) => {
    setContactForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputProps = {
    onChange: onChangeHandler,
    fullWidth: true,
    sx: styles.input,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    !contactData
      ? addContact({
          id: `${contactId}-${contactForm.name}`,
          ...contactForm,
        })
      : updateContact({
          id: contactData.id,
          ...contactForm,
        });

    setContactForm({
      name: "",
      email: "",
      phone: "",
      relationship: "personal",
    });
  };
  return (
    <Card sx={{ p: 4 }}>
      <Box component='form' onSubmit={submitHandler}>
        <Typography variant='h4' fontWeight={600} mb={4}>
          Add Contact
        </Typography>
        <TextField
          required
          id='name'
          name='name'
          label='Full Name'
          value={contactForm.name}
          {...inputProps}
        />

        <TextField
          required
          id='email'
          type='email'
          name='email'
          label='Email'
          value={contactForm.email}
          {...inputProps}
        />
        <TextField
          required
          id='phone'
          name='phone'
          label='Phone'
          value={contactForm.phone}
          {...inputProps}
        />

        <FormControl sx={{ display: "flex" }}>
          <Box component='div' sx={{ display: "flex", alignItems: "center" }}>
            <FormLabel
              id='relation'
              sx={{ mr: 3, fontWeight: 500, fontSize: "18px" }}
            >
              Gender:
            </FormLabel>
            <RadioGroup
              name='relationship'
              value={contactForm.relationship}
              onChange={onChangeHandler}
            >
              <Box component='div'>
                <FormControlLabel
                  value='professional'
                  control={<Radio />}
                  label='Professional'
                  sx={styles.radioLabel}
                />
                <FormControlLabel
                  value='personal'
                  control={<Radio />}
                  label='Personal'
                  sx={styles.radioLabel}
                />
              </Box>
            </RadioGroup>
          </Box>
        </FormControl>

        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={styles.btn}
        >
          {contactData ? "Update Contact" : "Add Contact"}
        </Button>
      </Box>
    </Card>
  );
};

export default ContactForm;
