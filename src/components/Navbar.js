import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/annapurna-logo.png";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappNumber = "+9109226203020";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`, "_blank");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* LOGO + BRAND */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Annapurna Mess & Catering"
            className="brand-logo"
          />
          <span className="brand-text">
            ANNAPURNA <span className="brand-catering">CATERINGS</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <a
            href="https://wa.me/9109226203020"
            className="btn-start"
            onClick={openWhatsApp}
          >
            Get Started
          </a>
        </div>

        {/* TOGGLE BUTTON */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

