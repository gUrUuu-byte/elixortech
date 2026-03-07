import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Execution.css';

const Execution = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <section className="execution-section" id="execution" aria-label="Services and delivery speed">
            {/* Ambient Background Glow */}
            <div className="execution-bg-glow"></div>

            <motion.div
                className="execution-header"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
            >
                <div className="liquid-badge-wrapper section-badge">
                    <div className="liquid-badge">
                        <span className="badge-content-text">Lightning Fast Delivery</span>
                        <div className="liquid-container">
                            <div className="liquid-wave wave-1"></div>
                            <div className="liquid-wave wave-2"></div>
                        </div>
                    </div>
                </div>
                <h2 className="execution-headline">
                    We engineer complete<br />products at velocity
                </h2>
                <p className="execution-subtext">
                    Your vision, realized. Backed by 5+ successful client launches.
                </p>
            </motion.div>

            <motion.div
                className="service-pills-container"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <motion.div className="service-pill pill-purple" variants={fadeUp}>
                    <div className="pill-inner">Website Development</div>
                </motion.div>
                <motion.div className="service-pill pill-orange" variants={fadeUp}>
                    <div className="pill-inner">Mobile App Development</div>
                </motion.div>
                <motion.div className="service-pill pill-blue" variants={fadeUp}>
                    <div className="pill-inner">Landing Page Revamp</div>
                </motion.div>
                <motion.div className="service-pill pill-green" variants={fadeUp}>
                    <div className="pill-inner">AI SaaS</div>
                </motion.div>
            </motion.div>

            <motion.div
                className="comparison-glass-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
            >
                <h3 className="comparison-title">3x Faster Than Traditional Teams</h3>
                <p className="comparison-desc">
                    We consistently ship launch-ready MVPs in just 21 days Traditional teams often<br />
                    take 3 to 6 months to reach the same point
                </p>

                <div className="comparison-bars-layout">
                    {/* Elixor Technologies Bar */}
                    <div className="comp-bar elixor-bar">
                        <div className="bar-main">
                            <div className="bar-pill elixor-pill">
                                <span className="pill-text">with Elixor Technologies</span>
                                <div className="pill-glow-icon">
                                    <Zap size={14} fill="#059669" strokeWidth={0} />
                                </div>
                            </div>
                            <div className="bar-metric">
                                <span className="metric-value">21</span>
                                <span className="metric-unit">Days</span>
                            </div>
                        </div>
                    </div>

                    {/* Others Bar */}
                    <div className="comp-bar others-bar">
                        <div className="bar-main">
                            <div className="bar-pill others-pill">
                                <span className="pill-text">with others</span>
                            </div>
                            <div className="bar-metric">
                                <span className="metric-value">180</span>
                                <span className="metric-unit">Days</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="comparison-bottom-note">
                    *The Earth moves 54 million kilometers around the Sun in 21 days, our MVPs orbit the market just as fast
                </p>
            </motion.div>
        </section>
    );
};

export default Execution;
