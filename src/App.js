import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Pricings from "./components/Pricings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/pricings"
          element={
            <Layout>
              <Pricings />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
