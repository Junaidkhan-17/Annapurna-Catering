import React, { useState } from "react";
import "./PostCarousel.css";

import p1 from "../cateringpic/catering1.jpeg";
import p2 from "../cateringpic/catering2.jpeg";
import p3 from "../cateringpic/catering3.jpeg";
import p4 from "../cateringpic/catering4.jpeg";
import p5 from "../cateringpic/catering5.jpeg";
import p6 from "../cateringpic/catering6.jpeg";
import p7 from "../cateringpic/catering7.jpeg";
import p8 from "../cateringpic/catering8.jpeg";
import p9 from "../cateringpic/catering9.jpeg";
import p10 from "../cateringpic/catering10.jpeg";

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const PostCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <section className="post-carousel-section">
      <h3 className="carousel-title">
        Our Work & <span>Facilities</span>
      </h3>

      <div className="carousel-container">
        <button className="nav-btn left" onClick={prev}>
          &#10094;
        </button>

        <div className="carousel-track">
          {images.map((img, i) => {
            const offset = i - index;

            return (
              <div
                key={i}
                className={`carousel-card ${offset === 0 ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${img})`,
                  transform: `
                    translateX(${offset * 260}px)
                    scale(${offset === 0 ? 1 : 0.82})
                  `,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  zIndex: 10 - Math.abs(offset),
                  filter: offset === 0 ? "none" : "blur(3px) brightness(0.8)"
                }}
              />
            );
          })}
        </div>

        <button className="nav-btn right" onClick={next}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default PostCarousel;


