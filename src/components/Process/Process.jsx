import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MousePointer2, Heart, Search, ClipboardList, Lightbulb, Map, LayoutPanelLeft, Code2, Target, Users } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Process.css';

const Process = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    return (
        <section className="process-section" id="detailed-process">
            <div className="process-glass-container">

                {/* Top Glowing Mesh */}
                <div className="process-top-glow"></div>

                {/* Header */}
                <motion.div
                    className="process-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                >
                    <div className="process-header-left">
                        <div className="liquid-badge-wrapper section-badge">
                            <div className="liquid-badge">
                                <span className="badge-content-text">Our Process</span>
                                <div className="liquid-container">
                                    <div className="liquid-wave wave-1"></div>
                                    <div className="liquid-wave wave-2"></div>
                                </div>
                            </div>
                        </div>
                        <h2 className="process-headline">Move at Startup Speed</h2>
                    </div>
                    <div className="process-header-right">
                        <p className="process-description">
                            Our streamlined methodology guarantees rapid deployment without compromising on quality. We prioritize what matters most to your users.
                        </p>
                        <div className="liquid-badge-wrapper process-cta-wrapper">
                            <div className="liquid-badge">
                                <span className="badge-content-text">Start your project ↗</span>
                                <div className="liquid-container">
                                    <div className="liquid-wave wave-1"></div>
                                    <div className="liquid-wave wave-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Steps List */}
                <div className="process-steps">

                    {/* Step 01 */}
                    <motion.div
                        className="process-step"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="step-content" variants={slideInLeft}>
                            <span className="step-number">01</span>
                            <h3 className="step-title">Discovery</h3>
                            <p className="step-text">
                                We begin by diving deep into your vision, target audience, and core objectives to establish a solid foundation.
                            </p>
                        </motion.div>
                        <motion.div className="step-visual" variants={slideInRight}>
                            <div className="visual-pill-wrapper dotted-bg flex-center">
                                {/* Connecting Idea Nodes Simulation */}
                                <div className="discovery-nodes-wrapper">
                                    <div className="node-center">
                                        <div className="node-glow"></div>
                                        <MagneticIcon maxRotation={15}>
                                            <Lightbulb size={24} color="#0ea5e9" />
                                        </MagneticIcon>
                                    </div>
                                    <div className="node node-1">
                                        <Search size={14} color="#64748b" />
                                    </div>
                                    <div className="node node-2">
                                        <ClipboardList size={14} color="#64748b" />
                                    </div>
                                    <div className="node node-3">
                                        <Target size={14} color="#64748b" />
                                    </div>
                                    <div className="node node-4">
                                        <Users size={14} color="#64748b" />
                                    </div>
                                    {/* SVG Connecting Lines to center */}
                                    <svg className="node-connections" viewBox="0 0 200 200">
                                        <line x1="100" y1="100" x2="40" y2="50" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" />
                                        <line x1="100" y1="100" x2="160" y2="40" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" />
                                        <line x1="100" y1="100" x2="40" y2="150" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" />
                                        <line x1="100" y1="100" x2="160" y2="160" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Step 02 */}
                    <motion.div
                        className="process-step row-reverse"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="step-content" variants={slideInRight}>
                            <span className="step-number">02</span>
                            <h3 className="step-title">Architecture</h3>
                            <p className="step-text">
                                Designing a scalable blueprint. We outline the technical infrastructure and user flows required for a seamless experience.
                            </p>
                        </motion.div>
                        <motion.div className="step-visual" variants={slideInLeft}>
                            {/* Tilted layered cards simulation */}
                            <div className="tilted-cards-wrapper">
                                <div className="tilted-card card-back"></div>
                                <div className="tilted-card card-mid"></div>
                                <div className="tilted-card card-front">
                                    {/* Abstract UI representation */}
                                    <div className="ui-header"></div>
                                    <div className="ui-body">
                                        <div className="ui-sidebar"></div>
                                        <div className="ui-content-area">
                                            <div className="ui-line" style={{ width: '60%' }}></div>
                                            <div className="ui-line" style={{ width: '80%' }}></div>
                                            <div className="ui-line" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Step 03 */}
                    <motion.div
                        className="process-step"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="step-content" variants={slideInLeft}>
                            <span className="step-number">03</span>
                            <h3 className="step-title">Development</h3>
                            <p className="step-text">
                                Execution phase. We build your product using modern, robust technologies, ensuring high performance and reliability.
                            </p>
                        </motion.div>
                        <motion.div className="step-visual" variants={slideInRight}>
                            <div className="visual-pill-wrapper dark-bg">
                                <div className="code-block-mock">
                                    <span className="code-line keyword">import</span> React <span className="code-line keyword">from</span> <span className="code-line string">'react'</span>;<br />
                                    <span className="code-line keyword">const</span> <span className="code-line function">App</span> = () =&gt; {'{'}<br />
                                    &nbsp;&nbsp;<span className="code-line keyword">return</span> (<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-line component">ProcessView</span> /&gt;<br />
                                    &nbsp;&nbsp;);<br />
                                    {'}'};<br />
                                    <span className="code-line keyword">export default</span> App;
                                </div>
                                <div className="floating-brand brand-cursor">
                                    <MagneticIcon maxRotation={25}>
                                        <MousePointer2 size={16} fill="#0f172a" />
                                    </MagneticIcon>
                                    CURSOR
                                </div>
                                <div className="floating-brand brand-lovable">
                                    <MagneticIcon maxRotation={25}>
                                        <Heart size={16} fill="#ef4444" stroke="#ef4444" />
                                    </MagneticIcon>
                                    Lovable
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Step 04 */}
                    <motion.div
                        className="process-step row-reverse"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div className="step-content" variants={slideInRight}>
                            <span className="step-number">04</span>
                            <h3 className="step-title">Deployment</h3>
                            <p className="step-text">
                                Taking your product live. We handle the deployment process and ensure everything runs smoothly in a production environment.
                            </p>
                        </motion.div>
                        <motion.div className="step-visual" variants={slideInLeft}>
                            <div className="visual-pill-wrapper bright-bg">
                                {/* Central glow and rocket */}
                                <div className="center-glow"></div>
                                <div className="rocket-badge">
                                    <MagneticIcon maxRotation={30}>
                                        <Rocket size={32} color="#0284c7" />
                                    </MagneticIcon>
                                </div>

                                {/* Floating surrounding texts */}
                                <div className="floating-text" style={{ top: '25%', left: '20%' }}>MVP IN 21 DAYS</div>
                                <div className="floating-text" style={{ top: '25%', right: '20%' }}>SPEED TO MARKET</div>
                                <div className="floating-text" style={{ bottom: '25%', left: '15%' }}>AI LEAD DEVELOPMENT</div>
                                <div className="floating-text" style={{ bottom: '25%', right: '15%' }}>SCALABLE INFRA</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Process;
