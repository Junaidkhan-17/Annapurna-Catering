import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  const blogImages = [
    "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2>Let’s Discover Healthy Eating & Recipes</h2>
          <p>Explore insights, nutrition tips & clean food ideas</p>
        </div>

        <div className="blog-grid">
          {[
            {
              img: blogImages[0],
              title: "Our Commitment To Fresh & Clean Ingredients",
              desc:
                "We source local vegetables, authentic spices and prepare meals that nourish your body and soul.",
            },
            {
              img: blogImages[1],
              title: "How Healthy Catering Boosts Team Productivity",
              desc:
                "Nutritious meals improve focus, energy and overall workplace wellness.",
            },
            {
              img: blogImages[2],
              title: "Top Clean Food Catering Menu Ideas",
              desc:
                "Traditional Indian flavors blended with modern nutrition principles.",
            },
          ].map((blog, i) => (
            <div className="blog-card" key={i}>
              <div
                className="blog-image"
                style={{ backgroundImage: `url(${blog.img})` }}
              />
              <div className="blog-content">
                <span className="badge">CLEAN FOOD</span>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <button className="btn-read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-footer">
          <button className="btn-orange">Discover Blog</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
