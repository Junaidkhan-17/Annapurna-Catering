import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  // High-quality healthy Indian food images
  const blogImages = [
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Fresh vegetables and herbs
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', // Healthy balanced meal
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'  // Fresh fruits and nuts
  ];

  return (
    <section className="py-5 bg-light blog-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Let's Discover Our Healthy Eating & Recipes</h2>
          <p className="text-muted">Check out our latest blog posts</p>
        </div>
        
        <div className="row">
          {/* Blog Post 1 */}
          <div className="col-md-4 mb-4">
            <div className="blog-card rounded-3 overflow-hidden shadow-sm">
              <div 
                className="blog-image"
                style={{ 
                  backgroundImage: `url(${blogImages[0]})`
                }}
              ></div>
              <div className="blog-content p-3">
                <span className="badge bg-orange text-white mb-2">CLEAN FOOD</span>
                <h3 className="mb-2">Our Commitment To Fresh And Clean Ingredients</h3>
                <p className="text-muted mb-3">Discover how we source the freshest local produce and traditional spices to create authentic, healthy Indian meals that nourish your body and soul.</p>
                <button className="btn btn-sm btn-read-more">Read More</button>
              </div>
            </div>
          </div>
          
          {/* Blog Post 2 */}
          <div className="col-md-4 mb-4">
            <div className="blog-card rounded-3 overflow-hidden shadow-sm">
              <div 
                className="blog-image"
                style={{ 
                  backgroundImage: `url(${blogImages[1]})`
                }}
              ></div>
              <div className="blog-content p-3">
                <span className="badge bg-orange text-white mb-2">CLEAN FOOD</span>
                <h3 className="mb-2">How Healthy Catering Can Boost Your Team's Productivity</h3>
                <p className="text-muted mb-3">Learn how nutritious Indian meals can enhance workplace wellness, improve focus, and increase productivity among your employees.</p>
                <button className="btn btn-sm btn-read-more">Read More</button>
              </div>
            </div>
          </div>
          
          {/* Blog Post 3 */}
          <div className="col-md-4 mb-4">
            <div className="blog-card rounded-3 overflow-hidden shadow-sm">
              <div 
                className="blog-image"
                style={{ 
                  backgroundImage: `url(${blogImages[2]})`
                }}
              ></div>
              <div className="blog-content p-3">
                <span className="badge bg-orange text-white mb-2">CLEAN FOOD</span>
                <h3 className="mb-2">Top 7 Clean Food Catering Menu Ideas</h3>
                <p className="text-muted mb-3">Explore our curated collection of wholesome Indian dishes that combine traditional flavors with modern nutrition principles.</p>
                <button className="btn btn-sm btn-read-more">Read More</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-5">
          <button className="btn btn-orange px-5 py-2">Discover Blog</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;