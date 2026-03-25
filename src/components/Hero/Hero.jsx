import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CodeXml, Clock, BrainCircuit, Box } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import HeroBackground from './HeroBackground';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 20 }
        }
    };

    const featureBarVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, delay: 0.6 }
        }
    };

    return (
        <section className="hero-section" aria-label="Hero — Craft and Launch with Velocity">
            {/* 3D Cursor-Responsive Background */}
            <HeroBackground />

            <motion.div
                className="hero-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Top Badge */}
                <motion.div className="hero-badge-container" variants={itemVariants}>
                    <div className="hero-trust-badge">
                        <div className="avatar-group">
                            <img src="https://i.pravatar.cc/100?img=11" alt="Startup founder testimonial for Elixor MVP development agency" loading="lazy" width="40" height="40" />
                            <img src="https://i.pravatar.cc/100?img=12" alt="SaaS platform founder review for Elixor Technologies" loading="lazy" width="40" height="40" />
                            <img src="https://i.pravatar.cc/100?img=13" alt="Tech startup CEO testimonial on rapid product development" loading="lazy" width="40" height="40" />
                        </div>
                        <span className="badge-text">Loved by forward-thinking startups.</span>
                        <span className="badge-highlight">⚡ FAST</span>
                    </div>
                </motion.div>

                {/* Main Content Split Layout */}
                <div className="hero-main">
                    {/* Left Column: Headline */}
                    <motion.div className="hero-left" variants={itemVariants}>
                        <h1 className="hero-title">
                            Craft <span className="glass-icon glass-icon-green"><CodeXml size={24} /></span> and Launch <br />
                            with Velocity
                            <MagneticIcon className="glass-icon glass-icon-silver">
                                <Rocket size={24} fill="#0f172a" />
                            </MagneticIcon>
                        </h1>
                    </motion.div>

                    {/* Right Column: Subheadline and CTA */}
                    <motion.div className="hero-right" variants={itemVariants}>
                        <p className="hero-subtitle">
                            Turn your vision into a stunning digital experience. We manage the heavy lifting of design and code, letting you focus on scaling.
                        </p>
                        <div className="liquid-badge-wrapper hero-cta-wrapper">
                            <div className="liquid-badge">
                                <span className="badge-content-text">Start your project ↗</span>
                                <div className="liquid-container">
                                    <div className="liquid-wave wave-1"></div>
                                    <div className="liquid-wave wave-2"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Features Glass Bar */}
                <motion.div className="hero-features-wrapper" variants={featureBarVariants}>
                    <div className="hero-features">
                        <div className="feature">
                            <MagneticIcon className="feature-icon">
                                <Clock size={16} />
                            </MagneticIcon>
                            <span className="feature-text">Rapid Delivery</span>
                        </div>
                        <div className="feature">
                            <MagneticIcon className="feature-icon">
                                <BrainCircuit size={16} />
                            </MagneticIcon>
                            <span className="feature-text">Custom Solutions</span>
                        </div>
                        <div className="feature">
                            <MagneticIcon className="feature-icon">
                                <Box size={16} />
                            </MagneticIcon>
                            <span className="feature-text">Future-Proof Architecture</span>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Hero;
