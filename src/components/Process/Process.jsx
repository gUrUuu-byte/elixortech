import React from 'react';
import { Rocket, MousePointer2, Heart, Search, ClipboardList, Lightbulb, Map, LayoutPanelLeft, Code2 } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Process.css';

const Process = () => {
    return (
        <section className="process-section" id="detailed-process">
            <div className="process-glass-container">

                {/* Top Glowing Mesh */}
                <div className="process-top-glow"></div>

                {/* Header */}
                <div className="process-header">
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
                            Our 4-step process is built for momentum. We keep it lean, focused, and validation-ready so you can launch without delays.
                        </p>
                        <div className="liquid-badge-wrapper process-cta-wrapper">
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

                {/* Steps List */}
                <div className="process-steps">

                    {/* Step 01 */}
                    <div className="process-step">
                        <div className="step-content">
                            <span className="step-number">01</span>
                            <h3 className="step-title">Initial Consultation</h3>
                            <p className="step-text">
                                We kick things off with a quick discovery call to understand your product idea, goals, and user needs.
                            </p>
                        </div>
                        <div className="step-visual">
                            <div className="visual-pill-wrapper dotted-bg">
                                {/* SVG Connecting Lines with Arrows */}
                                <svg className="connecting-lines" width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                                    <defs>
                                        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                            <polygon points="0 0, 6 3, 0 6" fill="rgba(148, 163, 184, 0.6)" />
                                        </marker>
                                    </defs>
                                    {/* Curved lines connecting the tags to tell a story */}
                                    <path d="M 110 50 C 110 120, 130 140, 150 140" fill="none" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
                                    <path d="M 180 140 C 230 140, 230 60, 240 50" fill="none" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
                                    <path d="M 270 50 C 300 50, 280 140, 300 140" fill="none" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
                                    <path d="M 330 140 C 360 140, 370 60, 380 50" fill="none" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="1.5" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
                                </svg>

                                {/* Floating Tags */}
                                <div className="floating-tag tag-gray" style={{ top: '20%', left: '10%' }}>
                                    <Search size={14} className="tag-icon" /> Discovery Call
                                </div>
                                <div className="floating-tag tag-blue" style={{ top: '15%', left: '50%' }}>
                                    <ClipboardList size={14} className="tag-icon" /> Planning
                                </div>
                                <div className="floating-tag tag-orange" style={{ top: '15%', left: '75%' }}>
                                    <LayoutPanelLeft size={14} className="tag-icon" /> Strategy
                                </div>
                                <div className="floating-tag tag-green" style={{ top: '70%', left: '30%' }}>
                                    <Lightbulb size={14} className="tag-icon" /> Idea
                                </div>
                                <div className="floating-tag tag-purple" style={{ top: '70%', left: '60%' }}>
                                    <Map size={14} className="tag-icon" /> Roadmap
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="process-step row-reverse">
                        <div className="step-content">
                            <span className="step-number">02</span>
                            <h3 className="step-title">Strategy</h3>
                            <p className="step-text">
                                We map out features, prioritize what to build first, and align the roadmap around fast validation and clear outcomes.
                            </p>
                        </div>
                        <div className="step-visual">
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
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="process-step">
                        <div className="step-content">
                            <span className="step-number">03</span>
                            <h3 className="step-title">Code</h3>
                            <p className="step-text">
                                We use industry-standard AI tools like Lovable and Cursor to write clean, scalable code faster.
                            </p>
                        </div>
                        <div className="step-visual">
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
                        </div>
                    </div>

                    {/* Step 04 */}
                    <div className="process-step row-reverse">
                        <div className="step-content">
                            <span className="step-number">04</span>
                            <h3 className="step-title">Launch</h3>
                            <p className="step-text">
                                Once launched, your product is ready to test with users, pitch to investors, or go to market — with support from our team along the way.
                            </p>
                        </div>
                        <div className="step-visual">
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
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;
