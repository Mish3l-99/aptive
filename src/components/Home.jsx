import React from "react";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Pricings from "./Pricings";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricings />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
