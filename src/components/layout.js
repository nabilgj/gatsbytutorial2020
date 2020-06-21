import React, { Fragment } from "react";
import "./layout.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

const layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </Fragment>
  );
};

// to avoid manually using navbar and footer
export default layout;
