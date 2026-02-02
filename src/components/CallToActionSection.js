import React, { useState } from "react";
import "./CallToActionSection.css";

const CallToActionSection = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="cta-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="cta-title">
              Ready To Eat <span>Healthier</span>?
              <br />
              Let’s Get Started Today
            </h2>

            <p className="cta-text">
              Fresh, hygienic & delicious meals by
              <strong> Annapurna Mess & Catering</strong>
            </p>

            {/* CONTACT ACTION */}
            <div className="cta-action">
              <button
                className="cta-btn"
                onClick={() => setShowOptions(!showOptions)}
              >
                Contact Us
              </button>

              {/* ICON OPTIONS */}
              <div className={`cta-icons ${showOptions ? "show" : ""}`}>
                <a
                  href="tel:+91 9340511235"
                  className="cta-icon-btn phone"
                  aria-label="Call Us"
                >
                  📞
                </a>

                <a
                  href="https://wa.me/91 9340511235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-icon-btn whatsapp"
                  aria-label="WhatsApp Us"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-6 text-center">
            <div className="cta-card">
              <div className="cta-badge">⭐</div>
              <div>
                <h3>Multiple Unique Menus</h3>
                <p>Customer Choice & Custom Plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
