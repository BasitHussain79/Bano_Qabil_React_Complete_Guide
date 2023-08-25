import {
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../../context/alertContext/alertContext";
import AuthContext from "../../../context/authContext/authContext";

const styles = {
  label: {
    display: "block",
    marginBottom: "5px",
    marginLeft: "2px",
    fontWeight: 500,
  },
};

const Login = () => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const navigate = useNavigate();

  console.log("first*************");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { error, login, isAuthenticated } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      setAlert(error, "error");
    }
  }, [error, isAuthenticated]);

  const onChangeHandler = (e) =>
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      setAlert("Please fill the login form", "error");
    } else {
      login({
        email: user.email,
        password: user.password,
      });
    }
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
