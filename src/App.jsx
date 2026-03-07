import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Process from './components/Process/Process';
import Execution from './components/Execution/Execution';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Global pixelated grid and grain */}
      <div className="pixel-overlay"></div>
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
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
