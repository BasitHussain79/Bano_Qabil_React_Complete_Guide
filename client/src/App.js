import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Navbar from "./components/common/Navbar";
import PageNotFound from "./pages/page-not-found";
import { Box, CssBaseline } from "@mui/material";
import ContactState from "./context/contactContext/contactState";
import "./App.css";

const App = () => {
  return (
    <ContactState>
      <Box component='div'>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Router>
      </Box>
    </ContactState>
  );
};

export default App;
