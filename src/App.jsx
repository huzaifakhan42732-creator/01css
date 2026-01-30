import React, { useState } from 'react';
import './App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="classy-header">
      <div className="header-container">
        {/* Logo/Brand Section */}
        <div className="brand-section">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <h1 className="brand-name">Elegance</h1>
          </div>
          <p className="brand-tagline">Premium Experiences</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA & Mobile Menu Button */}
        <div className="header-actions">
          <button className="cta-button">Get Started</button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="mobile-nav-item">
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-nav-item">
              <button className="mobile-cta-button">Get Started</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
