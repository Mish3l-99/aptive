import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-12">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
