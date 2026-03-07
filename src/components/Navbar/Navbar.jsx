import React, { useState, useEffect } from 'react';
import MagneticButton from '../Common/MagneticButton';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="navbar-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <img className="logo-icon" src="/logo.png" alt="ElixorTech Logo" />
          <span className="logo-text">ElixorTech.</span>
        </div>

        <ul className="navbar-links">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <li>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
              {index < navLinks.length - 1 && (
                <div className="nav-separator"></div>
              )}
            </React.Fragment>
          ))}
        </ul>

        {/* Magnetic Button with an extended hover radius effect */}
        <MagneticButton className="liquid-badge-wrapper navbar-cta-wrapper" elasticity={0.25} magneticRadius={120}>
          <div className="liquid-badge">
            <span className="badge-content-text">Book a slot ↗</span>
            <div className="liquid-container">
              <div className="liquid-wave wave-1"></div>
              <div className="liquid-wave wave-2"></div>
            </div>
          </div>
        </MagneticButton>
      </nav>
    </div>
  );
};

export default Navbar;
