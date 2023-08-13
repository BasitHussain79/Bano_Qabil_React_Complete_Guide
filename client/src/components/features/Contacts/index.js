import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contacts = [
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
  ];

  return (
    <Container maxWidth='lg'>
      <Box component='div' my={10}>
        <Toolbar />
        <Grid container spacing={{ md: 2, lg: 4 }}>
          <Grid item sm={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item sm={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant='h4' color='#333' fontWeight={600}>
                Contacts List
              </Typography>
              <CardContent>
                {contacts.map((data, idx) => (
                  <Fragment key={data.id}>
                    <ContactList data={data} />
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
