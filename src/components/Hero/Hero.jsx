import React from 'react';
import { Rocket, CodeXml, Clock, BrainCircuit, Box } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">

                {/* Top Badge */}
                <div className="hero-badge-container">
                    <div className="hero-trust-badge">
                        <div className="avatar-group">
                            <img src="https://i.pravatar.cc/100?img=11" alt="founder" />
                            <img src="https://i.pravatar.cc/100?img=12" alt="founder" />
                            <img src="https://i.pravatar.cc/100?img=13" alt="founder" />
                        </div>
                        <span className="badge-text">Trusted by 20+ visionary founders.</span>
                        <span className="badge-highlight">⚡ FAST</span>
                    </div>
                </div>

                {/* Main Content Split Layout */}
                <div className="hero-main">
                    {/* Left Column: Headline */}
                    <div className="hero-left">
                        <h1 className="hero-title">
                            Build <span className="glass-icon glass-icon-green"><CodeXml size={24} /></span> and Validate <br />
                            in 21 days
                            <MagneticIcon className="glass-icon glass-icon-silver">
                                <Rocket size={24} fill="#0f172a" />
                            </MagneticIcon>
                        </h1>
                    </div>

                    {/* Right Column: Subheadline and CTA */}
                    <div className="hero-right">
                        <p className="hero-subtitle">
                            From concept to clickable product. We handle strategy, design, and launch so you can focus on building momentum.
                        </p>
                        <div className="liquid-badge-wrapper hero-cta-wrapper">
                            <div className="liquid-badge">
                                <span className="badge-content-text">Book a slot ↗</span>
                                <div className="liquid-container">
                                    <div className="liquid-wave wave-1"></div>
                                    <div className="liquid-wave wave-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Features Glass Bar */}
                <div className="hero-features-wrapper">
                    <div className="hero-features">
                        <div className="feature">
                            <MagneticIcon className="feature-icon">
                                <Clock size={16} />
                            </MagneticIcon>
                            <span className="feature-text">MVP in 21 days</span>
                        </div>
                        <div className="feature">
                            <MagneticIcon className="feature-icon">
                                <BrainCircuit size={16} />
                            </MagneticIcon>
                            <span className="feature-text">AI Driven Development</span>
                        </div>
                        <div className="feature">
                            <MagneticIcon className="feature-icon">
                                <Box size={16} />
                            </MagneticIcon>
                            <span className="feature-text">Scalable Tech Stack</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
