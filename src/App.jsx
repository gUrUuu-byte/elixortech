import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Process from './components/Process/Process';
import Execution from './components/Execution/Execution';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AmbientBackground from './components/AmbientBackground/AmbientBackground';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize Lenis for buttery smooth scrolling, which makes
    // scroll-linked animations (like the sticky projects) look perfect.
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Tie Lenis scrolling to requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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

      {/* Subtle ambient floating elements */}
      <AmbientBackground />

      <Navbar />

      <main className="main-content">
        <Hero />
        <Features />
        <Process />
        <Execution />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
