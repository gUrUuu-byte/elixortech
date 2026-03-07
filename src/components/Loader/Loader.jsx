import React from 'react';
import './Loader.css';

const Loader = ({ isLoading }) => {
    return (
        <div className={`loader-overlay ${!isLoading ? 'fade-out' : ''}`}>
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-title">elixor@dev</div>
                    <div className="terminal-controls">
                        <div className="control close"></div>
                        <div className="control minimize"></div>
                        <div className="control maximize"></div>
                    </div>
                </div>
                <div className="text">Initializing...</div>
            </div>
        </div>
    );
};

export default Loader;
