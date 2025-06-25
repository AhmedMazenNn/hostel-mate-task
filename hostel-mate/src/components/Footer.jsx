import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = e => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="footer">
      {/* Header Section */}
      <div className="footer-header">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/Vector.png" alt="" />
          <span className="logo-text">Positivus</span>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <a href="#about" className="nav-link">
            About us
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#use-cases" className="nav-link">
            Use Cases
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#linkedin" className="social-icon">
            <span>in</span>
          </a>
          <a href="#facebook" className="social-icon">
            <span>f</span>
          </a>
          <a href="#twitter" className="social-icon">
            <span>t</span>
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="footer-content">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-label">Contact us:</div>
          <div className="contact-details">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter">
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="email-input"
              required
            />
            <button type="submit" className="subscribe-btn">
              Subscribe to news
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">© 2023 Positivus. All Rights Reserved.</p>
        <a href="#privacy" className="privacy-link">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
