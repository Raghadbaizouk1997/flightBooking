import React from "react";
import Footer from "../footer/Footer";
import { FooterContact } from "../footerContact/footerContact";
import Header from "../header/Header";
import Home from "../../pages/home/home";


const Layout = ({ children, isHome }) => {
  
  return (
    <div className="container">
      <Home />
      {/* {!isHome && <Header />}
      <main className="main-position">{isHome ? <Home /> : children}</main> */}
      <FooterContact />
      <Footer />
    </div>
  );
};

export default Layout;
