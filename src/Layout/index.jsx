import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Components/global/Navbar";
import About from "../Pages/About";
import Work from "../Pages/Work";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import "../App.css";
import Footer from "../Components/global/Footer";
import FixedBottom from "../Components/global/FixedBottom";

const Index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* Redirect all non-matching routes to Home */}
      </Routes>
      <Footer />
      <FixedBottom />
    </Router>
  );
};

export default Index;
