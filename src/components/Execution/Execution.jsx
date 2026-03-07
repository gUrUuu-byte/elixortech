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
        <section className="execution-section" id="execution">
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
                <h3 className="comparison-title">Unmatched Speed to Market</h3>
                <p className="comparison-desc">
                    We consistently ship launch-ready MVPs in just 21 days. Traditional teams often<br />
                    take 3 to 6 months to reach the same point
                </p>

                <div className="comparison-cards-layout">
                    {/* Traditional Teams Card */}
                    <div className="comp-card card-others">
                        <div className="comp-card-header">
                            <span className="comp-label">Traditional Teams</span>
                        </div>
                        <div className="comp-card-body">
                            <div className="metric-wrapper">
                                <span className="comp-metric value-red">180</span>
                                <span className="comp-unit">Days</span>
                            </div>
                            <p className="comp-detail">Slow, unpredictable scopes, and bloated budgets.</p>
                        </div>
                    </div>

                    {/* VS Divider */}
                    <div className="comp-vs-divider">
                        <span>VS</span>
                    </div>

                    {/* ElixorTech Card */}
                    <div className="comp-card card-elixor">
                        <div className="comp-card-glow"></div>
                        <div className="comp-card-header">
                            <span className="comp-label highlight-label">with ElixorTech</span>
                            <MagneticIcon className="icon-timer-m">
                                <Zap size={18} fill="#10b981" strokeWidth={0} />
                            </MagneticIcon>
                        </div>
                        <div className="comp-card-body">
                            <div className="metric-wrapper">
                                <span className="comp-metric value-green">21</span>
                                <span className="comp-unit">Days</span>
                            </div>
                            <p className="comp-detail">High velocity, fixed pricing, and launch-ready code.</p>
                        </div>
                    </div>
                </div>

                {/* <p className="comparison-asterisk">
                    *The Earth moves 54 million kilometers around the Sun in 21 days, our MVPs orbit the market just as fast
                </p> */}
            </motion.div>
        </section>
    );
};

export default Execution;
