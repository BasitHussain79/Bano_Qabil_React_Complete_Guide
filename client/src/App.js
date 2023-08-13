import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/common/Navbar";
import PageNotFound from "./pages/page-not-found";
import ContactInner from "./pages/contact-inner";
import { Box, CssBaseline } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <Box component='div'>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact/:id' element={<ContactInner />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
