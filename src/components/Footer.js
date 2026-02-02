import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerBg =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1920&q=80";

  return (
    <footer
      className="footer-section position-relative"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-overlay">
        <div className="container">
          <div className="row">

            {/* BRAND */}
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

                {/* SOCIAL ICONS */}
                <div className="social-links mt-3">
                  <a
                    href="https://www.facebook.com/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://x.com/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    href="https://www.pinterest.com/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-md-2 mb-2">
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

            {/* NEWSLETTER */}
            <div className="col-md-6 mb-4">
              <h5 className="mb-3 footer-title">
                <i className="fas fa-envelope me-2"></i>Subscribe Our Newsletter
              </h5>
              <p className="footer-subtitle">
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
                </small>
              </div>
            </div>
          </div>

          <hr className="footer-divider my-4" />

          {/* FOOTER BOTTOM */}
          <div className="footer-bottom text-center position-relative">
            <div className="footer-contact mb-3 text-start">
              <i className="fas fa-phone me-2"></i>
              <span>+91 9340511235</span>
              <span className="mx-3">|</span>
              <i className="fas fa-envelope me-2"></i>
              <span>vivekchaple@gmail.com</span>
            </div>

            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Annapurna{" "}
              <span className="highlight-mess">Mess</span> &{" "}
              <span className="highlight-catering">Catering</span>. All rights
              reserved.
            </p>

            <a
              href="https://webdockstudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="webdock-credit-link"
            >
              <div className="webdock-credit">
                <svg width="150" height="48" viewBox="0 0 150 48">
                  <text x="10" y="12" fontSize="9" fill="rgba(255,255,255,0.8)">
                    Created by
                  </text>
                  <text
                    x="10"
                    y="28"
                    fontSize="16"
                    fontWeight="bold"
                    fill="white"
                  >
                    WEBDOCK
                  </text>
                  <text x="10" y="40" fontSize="10" fill="white">
                    STUDIOS
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
