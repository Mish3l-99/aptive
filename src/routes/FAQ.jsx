import React from "react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FAQPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-12">
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
