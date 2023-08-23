import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Alerts from "./components/common/Alert";
import Navbar from "./components/common/Navbar";
import Login from "./components/features/Login";
import AlertState from "./context/alert/alertState";
import AuthState from "./context/auth/authState";
import ContactState from "./context/contactContext/contactState";
import Home from "./pages";
import About from "./pages/about";
import PageNotFound from "./pages/page-not-found";
import Register from "./pages/register";

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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Router>
          </Box>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
