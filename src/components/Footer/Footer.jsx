import React from 'react';
import { Github, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">

                {/* 1. TOP CTA DARK CARD - Premium Software Feel */}
                <div className="footer-cta-card">
                    <div className="cta-card-pattern"></div>
                    <div className="cta-card-content">
                        <div className="cta-left">
                            <h2 className="cta-headline">
                                The range of capabilities <br />
                                we offer includes the ability <br />
                                to <span className="cta-glow-text">launch at lightspeed.</span>
                            </h2>
                        </div>
                        <div className="cta-right">
                            <p className="cta-subtext">
                                With a custom-built tech stack and AI-driven workflows that reduce
                                technical debt and automatically accelerate your momentum.
                            </p>
                            <div className="cta-actions">
                                <div className="liquid-badge-wrapper cta-main-btn">
                                    <div className="liquid-badge">
                                        <span className="badge-content-text">Get started <ArrowUpRight size={16} /></span>
                                        <div className="liquid-container">
                                            <div className="liquid-wave wave-1"></div>
                                            <div className="liquid-wave wave-2"></div>
                                        </div>
                                    </div>
                                </div>
                                <button className="cta-secondary-btn">
                                    Watch how it works <span className="play-icon">▶</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. MAIN FOOTER CONTENT */}
                <div className="footer-main">
                    {/* Massive Outline Background Text */}
                    <div className="footer-bg-text">ELIXOR</div>

                    <div className="footer-cols">
                        {/* Column 1: Branding */}
                        <div className="footer-col branding-col">
                            <div className="footer-logo">
                                <img className="logo-icon" src="/logo.png" alt="ElixorTech Logo" />
                                <span>ElixorTech.</span>
                            </div>
                            <p className="footer-branding-desc">
                                We are the mission control for founders looking to build, validate, and scale MVPs in record time.
                            </p>
                            <div className="status-badge-glass">
                                <span className="status-dot-pulsing"></span>
                                All systems operational
                            </div>
                        </div>

                        {/* Link Columns */}
                        <div className="links-group">
                            <div className="footer-col">
                                <h4>Agency</h4>
                                <a href="#home">Home</a>
                                <a href="#features">Features</a>
                                <a href="#pricing">Pricing</a>
                                <a href="#contact">Contact</a>
                                <a href="#blog">Blog</a>
                            </div>
                            <div className="footer-col">
                                <h4>Support</h4>
                                <a href="#docs">Documentation</a>
                                <a href="#faq">FAQ</a>
                                <a href="#support">Support</a>
                            </div>
                            <div className="footer-col">
                                <h4>Connect</h4>
                                <a href="#" className="social-link"><Twitter size={14} /> X (Twitter)</a>
                                <a href="#" className="social-link"><Linkedin size={14} /> LinkedIn</a>
                                <a href="#" className="social-link"><Youtube size={14} /> YouTube</a>
                                <a href="#" className="social-link"><Github size={14} /> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. BOTTOM BAR */}
                <div className="footer-bottom">
                    <div className="copyright">
                        © 2024 ElixorTech. All rights reserved
                    </div>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
