import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    {/* <Footer /> */}
  </>
);

export default Layout;
