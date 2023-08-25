import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Alerts from "./components/common/Alert";
import Navbar from "./components/common/Navbar";
import AlertState from "./context/alertContext/alertState";
import AuthState from "./context/authContext/authState";
import ContactState from "./context/contactContext/contactState";
import AppRouter from "./routing/AppRouter";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Box component="div">
            <CssBaseline />
            <Router>
              <Navbar />
              <Alerts />
              <AppRouter />
            </Router>
          </Box>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
