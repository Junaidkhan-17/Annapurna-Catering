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
            At <span className="brand-highlight">Annapurna Mess & Catering</span>,
            we believe that exceptional food is more than just a meal — it is an
            experience that brings people together. With over a decade of
            dedication to quality and consistency, we have proudly earned the
            trust of thousands of customers across Nagpur.
          </p>

          <p>
            We specialize in{" "}
            <span className="keyword-highlight">professional catering services</span>{" "}
            and reliable{" "}
            <span className="keyword-highlight">daily mess solutions</span>,
            serving corporate offices, hostels, families, events, and special
            occasions. Every dish is thoughtfully prepared to deliver the
            perfect balance of taste, nutrition, and hygiene.
          </p>

          <p>
            Our philosophy is simple — use{" "}
            <span className="keyword-highlight">fresh ingredients</span>, follow
            traditional cooking methods, and maintain uncompromising cleanliness.
            From sourcing quality produce to final presentation, every step is
            handled with care and responsibility.
          </p>

          <p>
            What truly sets{" "}
            <span className="brand-highlight">Annapurna Mess & Catering</span>{" "}
            apart is our personalized approach. We understand that every client
            has unique needs, dietary preferences, and expectations. Our flexible
            menus and attentive service ensure complete satisfaction, whether it’s
            a small family gathering or a large corporate event.
          </p>

          <p>
            Experience the{" "}
            <span className="brand-highlight">Annapurna difference</span> — where
            tradition meets innovation, quality meets trust, and every meal is
            crafted with passion, integrity, and a genuine love for food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;

