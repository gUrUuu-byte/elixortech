import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Box, CreditCard, Ship, Zap } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Features.css';

const Features = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section className="features-section" id="process">

            {/* Soft Glow behind the title */}
            <div className="section-glow"></div>

            {/* 1. Header with Elixir Dripping Effect */}
            <motion.div
                className="liquid-badge-wrapper"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
            >
                <div className="liquid-badge">
                    <span className="badge-content-text">Trusted by Founders</span>

                    <div className="liquid-container">
                        <div className="liquid-wave wave-1"></div>
                        <div className="liquid-wave wave-2"></div>
                    </div>
                </div>
            </motion.div>

            <motion.h2
                className="stats-main-headline"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
            >
                Trusted by startups,<br />
                first-time founders, and<br />
                creators worldwide.
            </motion.h2>

            {/* 2. Stats Glass Cards Row */}
            <motion.div
                className="stats-cards-row"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >

                {/* Card 1 */}
                <motion.div className="stat-card card-pattern-dots" variants={fadeUp}>
                    <div className="stat-card-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                    </div>
                    <p className="stat-card-text">
                        5+ MVPs Successfully<br />Delivered
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div className="stat-card card-pattern-waves" variants={fadeUp}>
                    <div className="stat-card-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                            <path d="M12 18V6"></path>
                        </svg>
                    </div>
                    <p className="stat-card-text">
                        $500K+ Raised by Clients<br />Post-Launch
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div className="stat-card card-pattern-lines" variants={fadeUp}>
                    <div className="stat-card-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <p className="stat-card-text">
                        4.95 Client Satisfaction<br />With Delivery
                    </p>
                </motion.div>

            </motion.div>

            {/* 4. "Why ElixorTech" Header & Cards */}
            <motion.div
                className="features-secondary-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
            >
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

                <motion.div
                    className="why-cards-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >

                    {/* Card 1 */}
                    <motion.div className="why-card" variants={fadeUp}>
                        <div className="card-ambient-glow glow-blue"></div>
                        <div className="card-top-gradient-strip strip-blue"></div>
                        <div className="why-card-iconbox icon-blue">
                            <MagneticIcon maxRotation={20}>
                                <Rocket size={24} color="#3b82f6" />
                            </MagneticIcon>
                        </div>
                        <div className="why-card-content">
                            <h3>Built for Velocity</h3>
                            <p>Ship your core product at breakneck speed. We cut through the noise to deliver the essential features that prove your market fit.</p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div className="why-card" variants={fadeUp}>
                        <div className="card-ambient-glow glow-orange"></div>
                        <div className="card-top-gradient-strip strip-orange"></div>
                        <div className="why-card-iconbox icon-orange">
                            <MagneticIcon maxRotation={20}>
                                <Box size={24} color="#f97316" />
                            </MagneticIcon>
                        </div>
                        <div className="why-card-content">
                            <h3>End-to-End Ownership</h3>
                            <p>Forget micromanaging tasks. We handle the architecture, design, and deployment so you can stay focused on growth and sales.</p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div className="why-card" variants={fadeUp}>
                        <div className="card-ambient-glow glow-teal"></div>
                        <div className="card-top-gradient-strip strip-teal"></div>
                        <div className="why-card-iconbox icon-teal">
                            <MagneticIcon maxRotation={20}>
                                <CreditCard size={24} color="#14b8a6" />
                            </MagneticIcon>
                        </div>
                        <div className="why-card-content">
                            <h3>Predictable Investment</h3>
                            <p>No scope creep or runaway hourly bills. We provide clear, milestone-based pricing that aligns perfectly with your startup's runway.</p>
                        </div>
                    </motion.div>

                </motion.div>
            </motion.div>

        </section>
    );
};

export default Features;
