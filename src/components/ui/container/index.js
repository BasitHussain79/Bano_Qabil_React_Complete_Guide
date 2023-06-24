import React from "react";
import Header from "../header";
import Footer from "../footer";

const containerStyle = {
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "rgba(238, 238, 238, 0.4)",
  margin: "5rem auto",
  borderRadius: "1.5rem",
  boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.3)",
  padding: "2rem",
};

const Container = ({ children }) => {
  return (
    <div style={containerStyle}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
