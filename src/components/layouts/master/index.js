import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";
import Header from "./header";
import Accordion from "../../faqs";

const MasterLayout = ({ children }) => {

  return (
    <>
        <Header />
        <main className="main-container">{children}</main>
        <Accordion />
        <Footer />
    </>
  );
};

MasterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MasterLayout;
