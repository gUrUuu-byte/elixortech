import React from 'react';
import { Zap } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Execution.css';

const Execution = () => {
    return (
        <section className="execution-section" id="execution">
            {/* Ambient Background Glow */}
            <div className="execution-bg-glow"></div>

            <div className="execution-header">
                <div className="liquid-badge-wrapper section-badge">
                    <div className="liquid-badge">
                        <span className="badge-content-text">3x Faster Execution</span>
                        <div className="liquid-container">
                            <div className="liquid-wave wave-1"></div>
                            <div className="liquid-wave wave-2"></div>
                        </div>
                    </div>
                </div>
                <h2 className="execution-headline">
                    We build every kind of<br />MVP fast
                </h2>
                <p className="execution-subtext">
                    Your product, your way. Backed by 40+ successful launches
                </p>
            </div>

            <div className="service-pills-container">
                <div className="service-pill pill-purple">
                    <div className="pill-inner">Website Development</div>
                </div>
                <div className="service-pill pill-orange">
                    <div className="pill-inner">Mobile App Development</div>
                </div>
                <div className="service-pill pill-blue">
                    <div className="pill-inner">Landing Page Revamp</div>
                </div>
                <div className="service-pill pill-green">
                    <div className="pill-inner">AI SaaS</div>
                </div>
            </div>

            <div className="comparison-glass-card">
                <h3 className="comparison-title">3x Faster Than Traditional Teams</h3>
                <p className="comparison-desc">
                    We consistently ship launch-ready MVPs in just 21 days. Traditional teams often<br />
                    take 3 to 6 months to reach the same point
                </p>

                <div className="comparison-chart">
                    {/* ElixorTech Row */}
                    <div className="chart-row">
                        <div className="bar-wrapper">
                            <div className="chart-bar bar-elixor">
                                <span className="bar-text">
                                    with ElixorTech
                                    <MagneticIcon className="icon-timer-m">
                                        <Zap size={18} fill="#0f172a" strokeWidth={0} />
                                    </MagneticIcon>
                                </span>
                            </div>
                        </div>
                        <span className="chart-value value-dark">21 Days</span>
                    </div>

                    {/* Others Row */}
                    <div className="chart-row">
                        <div className="bar-wrapper">
                            <div className="chart-bar bar-others">
                                <span className="bar-text">with others</span>
                            </div>
                        </div>
                        <span className="chart-value value-red">180 Days</span>
                    </div>
                </div>

                <p className="comparison-asterisk">
                    *The Earth moves 54 million kilometers around the Sun in 21 days, our MVPs orbit the market just as fast
                </p>
            </div>
        </section>
    );
};

export default Execution;
