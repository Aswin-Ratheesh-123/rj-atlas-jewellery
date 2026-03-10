import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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

      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;