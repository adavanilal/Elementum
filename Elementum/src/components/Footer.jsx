import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="newsletter-section">
          {/* Decorative arrows */}
          <div className="footer-arrows">
            <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
               <path d="M20 10 Q 10 30 20 50 M20 50 L 15 45 M20 50 L 25 45" stroke="#ff595e" strokeWidth="2" fill="none" strokeLinecap="round" />
               <path d="M50 0 Q 30 30 50 50 M50 50 L 45 45 M50 50 L 55 45" stroke="#ff595e" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          
          <h2 className="newsletter-title">
            Subscribe to <br/>
            our newsletter
          </h2>
          <p className="newsletter-subtitle">
            To make your stay special and even more memorable
          </p>
          <button className="subscribe-btn">Subscribe Now</button>
          
          <div className="purple-semi-circle-right"></div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Terms & Policies</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Follow Us</h4>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#youtube">Youtube</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul>
              <li>1498w Fluton ste, STE<br/>20 Chicago, IL 63867.</li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2023 Elementum. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
