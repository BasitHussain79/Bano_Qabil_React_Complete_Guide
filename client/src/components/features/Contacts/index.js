import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment, useContext, useState } from "react";
import ContactContext from "../../../context/contactContext/contactContext";
import ContactFilter from "./ContactFilter";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, deleteContact } = contactContext;
  const [contactData, setContactData] = useState(null);

  const getContact = (data) => {
    console.log(data);
    setContactData(data);
  };

  return (
    <Container maxWidth="lg">
      <Box component="div" my={10}>
        <Toolbar />
        <Grid container spacing={{ md: 2, lg: 4 }}>
          <Grid item sm={12} md={6}>
            <ContactForm contactData={contactData} />
          </Grid>
          <Grid item sm={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 2 }}>
              <Box component="div" mb={2}>
                <ContactFilter />
              </Box>
              <Typography variant="h4" color="#333" fontWeight={600}>
                Contacts List
              </Typography>
              <CardContent>
                {filtered != null
                  ? filtered.map((data, idx) => (
                      <Fragment key={idx}>
                        <ContactList
                          data={data}
                          getContact={getContact}
                          deleteContact={deleteContact}
                        />
                        {idx === contacts.length - 1 ? "" : <Divider />}
                      </Fragment>
                    ))
                  : contacts.map((data, idx) => (
                      <Fragment key={idx}>
                        <ContactList
                          data={data}
                          getContact={getContact}
                          deleteContact={deleteContact}
                        />
                        {idx === contacts.length - 1 ? "" : <Divider />}
                      </Fragment>
                    ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
