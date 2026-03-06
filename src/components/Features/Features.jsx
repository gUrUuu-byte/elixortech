import React from 'react';
import { Rocket, Box, CreditCard, Ship, Zap } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Features.css';

const Features = () => {
    return (
        <section className="features-section" id="process">

            {/* Soft Glow behind the title */}
            <div className="section-glow"></div>

            {/* 1. Header with Elixir Dripping Effect */}
            <div className="liquid-badge-wrapper">
                <div className="liquid-badge">
                    <span className="badge-content-text">Trusted by Founders</span>

                    <div className="liquid-container">
                        <div className="liquid-wave wave-1"></div>
                        <div className="liquid-wave wave-2"></div>
                    </div>
                </div>
            </div>

            <h2 className="stats-main-headline">
                Trusted by startups,<br />
                first-time founders, and<br />
                creators worldwide.
            </h2>

            {/* 2. Stats Glass Cards Row */}
            <div className="stats-cards-row">

                {/* Card 1 */}
                <div className="stat-card card-pattern-dots">
                    <div className="stat-card-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                    </div>
                    <p className="stat-card-text">
                        40+ MVPs Successfully<br />Delivered
                    </p>
                </div>

                {/* Card 2 */}
                <div className="stat-card card-pattern-waves">
                    <div className="stat-card-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                            <path d="M12 18V6"></path>
                        </svg>
                    </div>
                    <p className="stat-card-text">
                        $2M+ Raised by Clients<br />Post-Launch
                    </p>
                </div>

                {/* Card 3 */}
                <div className="stat-card card-pattern-lines">
                    <div className="stat-card-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <p className="stat-card-text">
                        4.95 Client Satisfaction<br />With Delivery
                    </p>
                </div>

            </div>

            {/* 3. Marquee Logo Row */}
            <div className="marquee-wrapper">
                <div className="marquee-content">
                    <span className="logo-font">Bloom</span>
                    <span className="logo-font">Jobby</span>
                    <span className="logo-font">CredBoost</span>
                    <span className="logo-font">ORBAFLOW</span>
                    <span className="logo-font">Medconnect</span>
                    {/* Duplicated for loop */}
                    <span className="logo-font">Bloom</span>
                    <span className="logo-font">Jobby</span>
                    <span className="logo-font">CredBoost</span>
                    <span className="logo-font">ORBAFLOW</span>
                    <span className="logo-font">Medconnect</span>
                </div>
            </div>

            {/* 4. "Why ElixorTech" Header & Cards */}
            <div className="features-secondary-content">
                <div className="secondary-glow"></div>
                <div className="liquid-badge-wrapper">
                    <div className="liquid-badge">
                        <span className="badge-content-text">Why ElixorTech?</span>
                        <div className="liquid-container">
                            <div className="liquid-wave wave-1"></div>
                            <div className="liquid-wave wave-2"></div>
                        </div>
                    </div>
                </div>

                <h2 className="why-labs-headline">
                    We're not just builders.<br />
                    We're your <span className="highlight-dark">mission control.</span>
                    <br />
                    <span className="blue-highlight">We move faster, build leaner, and deliver</span>
                    <br />
                    a working product in under a month so you can start validating, not waiting.
                </h2>

                <div className="why-cards-grid">

                    {/* Card 1 */}
                    <div className="why-card">
                        <div className="card-ambient-glow glow-blue"></div>
                        <div className="card-top-gradient-strip strip-blue"></div>
                        <div className="why-card-iconbox icon-blue">
                            <MagneticIcon maxRotation={20}>
                                <Rocket size={24} color="#3b82f6" />
                            </MagneticIcon>
                        </div>
                        <div className="why-card-content">
                            <h3>Speed to Market</h3>
                            <p>Launch your MVP in weeks, not months. Our streamlined build process prioritizes momentum without cutting corners.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="why-card">
                        <div className="card-ambient-glow glow-orange"></div>
                        <div className="card-top-gradient-strip strip-orange"></div>
                        <div className="why-card-iconbox icon-orange">
                            <MagneticIcon maxRotation={20}>
                                <Box size={24} color="#f97316" />
                            </MagneticIcon>
                        </div>
                        <div className="why-card-content">
                            <h3>Project Management</h3>
                            <p>No chasing. No confusion. One team, one timeline, with updates, clarity, and momentum from start to ship.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="why-card">
                        <div className="card-ambient-glow glow-teal"></div>
                        <div className="card-top-gradient-strip strip-teal"></div>
                        <div className="why-card-iconbox icon-teal">
                            <MagneticIcon maxRotation={20}>
                                <CreditCard size={24} color="#14b8a6" />
                            </MagneticIcon>
                        </div>
                        <div className="why-card-content">
                            <h3>Fixed Pricing</h3>
                            <p>No hourly surprises. Transparent pricing from day one, built for predictability and founder peace of mind.</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Features;
