import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Process from './components/Process/Process';
import Execution from './components/Execution/Execution';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Dynamic grain/mesh overlay for the whole app background */}
      <div className="noise-overlay"></div>

      {/* Wavy animated blobs */}
      <div className="wavy-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar />

      <main className="main-content">
        <Hero />
        <Features />
        <Process />
        <Execution />
      </main>
    </div>
  );
}

export default App;
