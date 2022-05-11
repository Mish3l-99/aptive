import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="pt-12">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
