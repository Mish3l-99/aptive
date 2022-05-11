import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactPage from "./routes/Contact";
import FAQPage from "./routes/FAQ";
import PricingsPage from "./routes/Pricings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/aptive" element={<Home />} exact />
        <Route path="/pricings" element={<PricingsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
