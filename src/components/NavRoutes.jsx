import React from "react";
// import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import MyEffect from "./MyEffect";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";


function NavRoutes() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MyEffect />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<MyEffect />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default NavRoutes;
