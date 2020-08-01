import React, { Fragment } from "react";
import Nav from "./nav/Nav";
import Footer from "./layout/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
