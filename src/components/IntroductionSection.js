import React, { useState, useEffect } from "react";
import "./IntroductionSection.css";

const IntroductionSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        setTextVisible(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="introduction-section">
      {/* Background */}
      <div className="image-carousel">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="intro-overlay" />

      {/* Content */}
      <div className="introduction-content container">
        <h2 className="intro-title">
          Welcome to <span className="brand-highlight">Annapurna</span>
        </h2>

        <div className={`introduction-text ${textVisible ? "fade-in" : ""}`}>
          <p>
            At{" "}
            <span className="brand-highlight">Annapurna Mess & Catering</span>,
            we believe that exceptional food is more than just a meal — it is an
            experience that brings people together. With consistent dedication
            to quality and hygiene, we have earned the trust of numerous clients
            across Nagpur.
          </p>

          <p>
            We specialize in{" "}
            <span className="keyword-highlight">
              professional catering services
            </span>{" "}
            and reliable{" "}
            <span className="keyword-highlight">daily mess solutions</span>,
            serving corporate offices, hostels, families, events, and special
            occasions.
          </p>

          <p>
            Our philosophy is simple — use{" "}
            <span className="keyword-highlight">fresh ingredients</span>, follow
            traditional cooking methods, and maintain uncompromising cleanliness
            at every stage of food preparation and service.
          </p>

          <p>
            What truly sets{" "}
            <span className="brand-highlight">Annapurna Mess & Catering</span>{" "}
            apart is our personalized approach. We understand that every client
            has unique requirements, and we tailor our services accordingly.
          </p>

          <p>
            Regarding the experience criteria outlined in the tender, I confirm
            that I am the sole proprietor of{" "}
            <span className="brand-highlight">
              Annapurna Mess & Catering Services
            </span>{" "}
            and have successfully provided catering services to several esteemed
            organizations.
          </p>
          {/* Experience Title */}
          <h3 className="experience-title">Experience & Client</h3>

          {/* Years of Experience */}
          <p className="experience-years">
            With over{" "}
            <span className="years-highlight">
              7+ Years of Professional Experience
            </span>{" "}
            working in <span className="location-highlight">Nagpur</span> and{" "}
            <span className="location-highlight">Butibori</span>, we have
            consistently delivered hygienic, reliable, and high-quality canteen
            services to corporate and industrial clients.
          </p>

          {/* Company List */}
          <ul className="company-list">
            <li className="company-item">GMMCO Ltd., Nagpur</li>
            <li className="company-item">
              Innovative Infra and Mining Solution Ltd., Butibori, Nagpur
            </li>
            <li className="company-item">GMMCO Ltd., Butibori, Nagpur</li>
            <li className="company-item">
              Aldecor Infrastructure Pvt. Ltd., Nagpur
            </li>
            <li className="company-item">
              Aura Integrated Solution Pvt. Ltd., Butibori, Nagpur
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
