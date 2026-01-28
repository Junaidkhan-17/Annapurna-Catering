import React from "react";
import "./Footer.css";

const Footer = () => {
  // Background image for footer
  const footerBg =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80";

  return (
    <footer
      className="footer-section position-relative"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="footer-brand">
                <h5 className="mb-3">
                  Annapurna <span className="highlight-mess">Mess</span> &{" "}
                  <span className="highlight-catering">Catering</span>
                </h5>
                <p className="footer-description">
                  Your trusted Annapurna{" "}
                  <span className="highlight-mess">mess</span> and{" "}
                  <span className="highlight-catering">catering</span> service.
                  We provide healthy, delicious, and fresh food for all
                  occasions.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="mb-3 footer-title">
                <i className="fas fa-link me-2"></i>Quick Links
              </h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="/" className="footer-link">
                    <i className="fas fa-chevron-right me-2"></i>Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="footer-link">
                    <i className="fas fa-chevron-right me-2"></i>Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-link">
                    <i className="fas fa-chevron-right me-2"></i>About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5 className="mb-3 footer-title">
                <i className="fas fa-envelope me-2"></i>Subscribe Our Newsletter
              </h5>
              <p className="text-muted mb-3 footer-subtitle">
                Get our latest update & new offers sales discount
              </p>
              <div className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control newsletter-input"
                    placeholder="Your email address"
                  />
                  <button className="btn btn-newsletter" type="button">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
                <small className="text-muted d-block mt-2">
                  <i className="fas fa-lock me-1"></i>We respect your privacy.
                  Unsubscribe anytime.
                </small>
              </div>
            </div>
          </div>

          <hr className="footer-divider my-4" />

          <div className="footer-bottom text-center position-relative">
            {/* Contact info — left-aligned */}
            <div className="footer-contact mb-3 text-start">
              <i className="fas fa-phone me-2"></i>
              <span>+91 092262 03020</span>
              <span className="mx-3">|</span>
              <i className="fas fa-envelope me-2"></i>
              <span>info@messcatering.com</span>
            </div>

            {/* Copyright — centered */}
            <p className="mb-0 copyright-text">
              &copy; {new Date().getFullYear()} Annapurna{" "}
              <span className="highlight-mess">Mess</span> &{" "}
              <span className="highlight-catering">Catering</span>. All rights
              reserved.
            </p>

            {/* Webdock Studios Credit — Bottom Right */}
            <a
              href="https://webdockstudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="webdock-credit-link"
              aria-label="Created by Webdock Studios"
            >
              <div className="webdock-credit">
                <svg
                  width="100"
                  height="60"
                  viewBox="0 0 150 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stylized W logo (exact from your image) */}
                  <path
                    d=""
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  {/* "WEBDOCK" */}
                  <text
                    x="66"
                    y="22"
                    fontFamily="Arial, sans-serif"
                    fontSize="15"
                    fontWeight="bold"
                    fill="white"
                  >
                    WEBDOCK
                  </text>
                  {/* "STUDIOS" */}
                  <text
                    x="66"
                    y="34"
                    fontFamily="Arial, sans-serif"
                    fontSize="10"
                    fontWeight="normal"
                    fill="white"
                    right="10"
                  >
                    STUDIOS
                  </text>
                  
                  {/* "Created by" — above the logo, smaller */}
                  <text
                    x="16"
                    y="10"
                    fontFamily=""
                    fontSize="9"
                    fontWeight="100"
                    fill="rgba(255,255,255,0.85)"
                    gap="5"
                  >
                    Created by
                  </text>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
