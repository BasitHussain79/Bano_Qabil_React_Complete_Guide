import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Navbar from "./components/common/Navbar";
import PageNotFound from "./pages/page-not-found";
import { Box, CssBaseline } from "@mui/material";
import ContactState from "./context/contactContext/contactState";
import "./App.css";
import Reigster from "./pages/reigster";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/common/Alerts";
import AuthState from "./context/auth/authState";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <Box component='div'>
            <CssBaseline />
            <Router>
              <Navbar />
              <Alerts />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Reigster />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </Router>
          </Box>
        </ContactState>
      </AlertState>
    </AuthState>
  );
};

export default App;
