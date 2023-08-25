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
import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/authContext/authContext";
import ContactContext from "../../../context/contactContext/contactContext";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const Contact = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;
  const { loadUser } = authContext;

  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);

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
              <Typography variant="h4" color="#333" fontWeight={600}>
                Contacts List
              </Typography>
              <CardContent>
                {contacts.map((data, idx) => (
                  <Fragment key={idx}>
                    <ContactList data={data} getContact={getContact} />
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
