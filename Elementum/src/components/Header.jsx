import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="logo">Elementum</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#studio">Studio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </nav>
      <div className="menu-icon">
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </header>
  );
};

export default Header;
