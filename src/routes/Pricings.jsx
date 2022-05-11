import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pricings from "../components/Pricings";

const PricingsPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-12">
        <Pricings />
      </div>
      <Footer />
    </>
  );
};

export default PricingsPage;
