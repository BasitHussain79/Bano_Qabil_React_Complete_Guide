import {
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const styles = {
  label: {
    display: "block",
    marginBottom: "5px",
    marginLeft: "2px",
    fontWeight: 500,
  },
};

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) =>
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Container maxWidth="sm">
      <Toolbar />
      <Box component="form" onSubmit={submitHandler} mt={6}>
        <Typography
          variant="h1"
          fontSize={{ sm: 32 }}
          fontWeight={600}
          textAlign="center"
          mb={2}
        >
          User Login
        </Typography>

        <Box component="div" sx={{ margin: "1rem 0" }}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <TextField
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={onChangeHandler}
            fullWidth
            placeholder="Email"
          />
        </Box>

        <Box component="div" sx={{ margin: "1rem 0" }}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <TextField
            id="password"
            name="password"
            type="password"
            value={user.password1}
            onChange={onChangeHandler}
            fullWidth
            placeholder="Password"
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", padding: "10px 10px" }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
