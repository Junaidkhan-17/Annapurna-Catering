import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo1 from '../images/logo1.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  // Your company WhatsApp number (replace with your actual number)
  const whatsappNumber = '+9109226203020'; // Include country code

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleWhatsAppClick = () => {
    // Open WhatsApp chat with your company number
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo and Brand Name together */}
        <Link className="navbar-brand" to="/" onClick={() => setActiveLink('/')}>
          <div className="brand-container">
            <img 
              src={logo1} 
              alt="Annapurna Mess & Catering Logo" 
              className="logo-img"
            />
            <div className="brand-name">
              Annapurna <span className="highlight-mess">Mess</span> & <span className="highlight-catering">Catering</span>
            </div>
          </div>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeLink === '/' ? 'active' : ''}`} 
                to="/"
                onClick={() => setActiveLink('/')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeLink === '/services' ? 'active' : ''}`} 
                to="/services"
                onClick={() => setActiveLink('/services')}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`} 
                to="/contact"
                onClick={() => setActiveLink('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          {/* WhatsApp Button */}
          <button 
            className="btn btn-orange ms-lg-3"
            onClick={handleWhatsAppClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;