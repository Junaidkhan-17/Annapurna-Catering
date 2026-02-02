import React, { useState, useEffect } from "react";
import "./HeroSection.css";

// Count animation hook
const useCountAnimation = (target, active, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = null;
    const step = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, active, duration]);

  return count;
};

// Stat Card
const StatCard = ({ number, label, suffix = "", delay = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const count = useCountAnimation(number, visible);

  return (
    <div className="col-10 col-sm-6 col-md-3 mb-3">
      <div className="stat-card">
        <h2 className="stat-number">
          {visible ? `${count}${suffix}` : "0"}
        </h2>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showText, setShowText] = useState(false);

  const whatsappNumber = "+919340511235";

  const images = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1606755965493-87e7501b6d5c",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setShowText(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 400);
    return () => clearTimeout(t);
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`, "_blank");
  };

  return (
    <section className="hero-section">
      <div className="image-carousel">
        {images.map((img, i) => (
          <div
            key={i}
            className={`carousel-image ${i === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="container text-center">
          <h1 className="hero-title">
            <span>Your</span>
            <span>Trusted</span>
            <span className="glow-primary">Annapurna</span>
            <span className="glow-secondary">Mess</span>
            <span>and</span>
            <span className="glow-primary">Catering</span>
            <span>Service</span>
          </h1>

          <p className={`hero-subtitle ${showText ? "fade-in" : ""}`}>
            Healthy, Delicious & Fresh Food Delivered to Your Doorstep
          </p>

          <button
            className={`hero-button ${showText ? "fade-in" : ""}`}
            onClick={openWhatsApp}
          >
            Get Started <i className="fab fa-whatsapp"></i>
          </button>

          <div className="row justify-content-center mt-5">
            <StatCard number={500} label="Happy Customers" suffix="+" />
            <StatCard number={50} label="Daily Orders" suffix="+" delay={200} />
            <StatCard number={24} label="Support" suffix="/7" delay={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


