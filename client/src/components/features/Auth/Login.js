import {
  Box,
  Button,
  Container,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
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

const Register = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2 } = user;

  const onChangeHandler = (e) => {
    setUser((pervState) => ({ ...pervState, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.perventDefault();
    console.log(user);
  };

  return (
    <Container maxWidth='sm'>
      <Toolbar />
      <Box component='form' onSubmit={submitHandler} mt={6}>
        <Typography
          variant='h1'
          fontSize={{ sm: 32 }}
          fontWeight={600}
          textAlign='center'
          mb={2}
        >
          User Registration
        </Typography>

        <Box component='div' sx={{ margin: "1rem 0" }}>
          <label htmlFor='name' style={styles.label}>
            Name
          </label>
          <TextField
            name='name'
            id='name'
            value={user.name}
            onChange={onChangeHandler}
            fullWidth
            placeholder='Full Name'
          />
        </Box>

        <Box component='div' sx={{ margin: "1rem 0" }}>
          <label htmlFor='email' style={styles.label}>
            Email
          </label>
          <TextField
            id='email'
            name='email'
            type='email'
            value={user.email}
            onChange={onChangeHandler}
            fullWidth
            placeholder='Email'
          />
        </Box>

        <Box component='div' sx={{ margin: "1rem 0" }}>
          <label htmlFor='password1' style={styles.label}>
            Password
          </label>
          <TextField
            id='password1'
            name='password1'
            type='password'
            value={user.password1}
            onChange={onChangeHandler}
            fullWidth
            placeholder='Password'
            inputProps={{ minLength: 6 }}
          />
        </Box>

        <Box component='div' sx={{ margin: "1rem 0" }}>
          <label htmlFor='password2' style={styles.label}>
            Confirm Password
          </label>
          <TextField
            id='password2'
            name='password2'
            type='password'
            value={user.password2}
            onChange={onChangeHandler}
            fullWidth
            placeholder='Confirm Password'
            inputProps={{ minLength: 6 }}
          />
        </Box>

        <Button
          type='submit'
          variant='contained'
          sx={{ width: "100%", padding: "10px 10px" }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
