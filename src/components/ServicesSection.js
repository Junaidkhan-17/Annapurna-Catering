import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  const [cardsInView, setCardsInView] = useState([false, false, false, false]);

  const cardRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const serviceImages = [
    "https://images.unsplash.com/photo-1569257820342-b64a933e7770",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    "https://images.unsplash.com/photo-1565288832840-5ec3e406fe5d",
  ];

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      const index = entry.target.dataset.index;
      if (entry.isIntersecting) {
        setCardsInView((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    cardRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.index = index;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Complete catering solutions crafted with care</p>
        </div>

        <div className="row services-row">
          {[
            {
              title: "Corporate Catering",
              icon: "fas fa-briefcase",
              desc: "Professional catering for meetings and business events.",
            },
            {
              title: "Private Events",
              icon: "fas fa-glass-martini-alt",
              desc: "Weddings, birthdays & family gatherings made special.",
            },
            {
              title: "Custom Menus",
              icon: "fas fa-leaf",
              desc: "Veg, vegan & table-service customized menus.",
            },
            {
              title: "Meal Prep Plans",
              icon: "fas fa-utensils",
              desc: "Fresh, healthy meals delivered weekly.",
            },
          ].map((item, index) => (
            <div className="col-md-6 mb-4" key={index} ref={cardRefs.current[index]}>
              <div
                className={`service-card ${
                  cardsInView[index] ? "show" : ""
                }`}
                style={{ backgroundImage: `url(${serviceImages[index]})` }}
              >
                <div className="service-overlay">
                  <i className={`${item.icon} service-icon`}></i>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button className="btn-orange">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

