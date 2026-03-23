import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import BanglesPage from "./pages/BanglesPage";
import BangleProductPage from "./pages/BangleProductPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import AllProductsPage from "./pages/AllProductsPage";
import CollectionsPage from "./pages/CollectionsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";

import "./styles/global.css";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryProductsPage />} />
        <Route path="/bangle-product" element={<BangleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;