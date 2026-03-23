import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBag, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* CART COUNT */
  useEffect(() => {

    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // 🔥 total quantity count
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);

      setCartCount(total);
    };

    updateCart();

    window.addEventListener("storage", updateCart);
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("storage", updateCart);
      window.removeEventListener("cartUpdated", updateCart);
    };

  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* LOGO */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="RJ Atlas Jewellery Logo" />
        </NavLink>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/collections" onClick={closeMenu}>Collections</NavLink></li>
          <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>

        </ul>

        {/* ACTIONS */}
        <div className="nav-actions">

          {/* CART ICON */}
          <NavLink to="/cart" className="cart-icon" onClick={closeMenu}>

            <FaShoppingBag />

            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}

          </NavLink>

          {/* MENU ICON */}
          <div
            className={`menu-icon ${menuOpen ? "rotate" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <span className="material-symbols-outlined">tile_small</span>
            )}
          </div>

        </div>

      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;