import React, { useState, useEffect } from "react";
import "./HeroSection.css";

// Custom hook for counting animation
const useCountAnimation = (
  targetNumber,
  shouldCount = true,
  duration = 2000,
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldCount) return;

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [targetNumber, shouldCount, duration]);

  return count;
};

// Separate StatCard component
// Separate StatCard component
const StatCard = ({ number, label, suffix, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const count = useCountAnimation(number, isVisible);

  return (
    <div className="col-md-3 mb-3">
      <div className="stat-card bg-dark bg-opacity-75 p-3 rounded-3">
        <div className="stat-number-container">
          <h2 className="stat-number mb-1">
            {isVisible ? `${count}${suffix}` : "0"}
          </h2>
        </div>
        <p className="stat-label mb-0">{label}</p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  // Your company WhatsApp number (replace with your actual number)
  const whatsappNumber = "+9109226203020"; // Include country code

  // High-quality Indian/Desi catering images
  const images = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1606755965493-87e7501b6d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  ];

  // Image carousel
  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setTextVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]); // 👈 Added images.length to dependencies

  // Show text after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`, "_blank");
  };

  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="image-carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentImage ? "active" : ""}`}
            style={{
              backgroundImage: `url(${img})`,
              transition: "opacity 1.5s ease-in-out",
            }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content text-center py-5 py-lg-0">
        <div className="container h-100 d-flex flex-column justify-content-center">
          <h1 className="display-2 fw-bold mb-4 hero-title">
            <span className="title-word">Your</span>
            <span className="title-word">Trusted</span>
            <span className="title-highlight-annapurna">Annapurna</span>
            <span className="title-highlight-mess">Mess</span>
            <span className="title-word">and</span>
            <span className="title-highlight-catering">Catering</span>
            <span className="title-word">Service</span>
          </h1>
          <p
            className={`lead mb-4 fs-4 hero-subtitle ${textVisible ? "fade-in" : ""}`}
          >
            Healthy, Delicious, and Fresh Food Delivered to Your Doorstep
          </p>
          <button
            onClick={handleWhatsAppClick}
            className={`btn btn-green btn-sm hero-button text-white ${textVisible ? "fade-in" : ""}`}
            style={{
              padding: "0.25rem 0.75rem",
              fontSize: "1.5rem",
              minWidth: "300px",
              height: "45px",
              display: "inline-center",
              alignItems: "center",
              backgroundColor: "#2ad652ff",
              gap: "20px",
            }}
          >
            {" "}
            Get Started <i className="fab fa-whatsapp"></i>
          </button>
          <div className="row mt-5 justify-content-center">
            <StatCard
              number={500}
              label="Happy Customers"
              suffix="+"
              delay={0}
            />
            <StatCard number={50} label="Daily Orders" suffix="+" delay={200} />
            <StatCard
              number={10}
              label="Years Experience"
              suffix="+"
              delay={400}
            />
            <StatCard number={24} label="Support" suffix="/7" delay={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
