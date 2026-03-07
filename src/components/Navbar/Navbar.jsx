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
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8 2 6 8 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 10.6667 17.5 9.5 16 8C17 9.5 17 11.5 17 11.5C17 14.2614 14.7614 16.5 12 16.5C9.23858 16.5 7.5 14.2614 7.5 11.5C7.5 9 10 4.5 12 2Z" fill="currentColor" />
          </svg>
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
