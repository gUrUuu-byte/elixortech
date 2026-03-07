import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Process from './components/Process/Process';
import Execution from './components/Execution/Execution';
import Projects from './components/Projects/Projects';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AmbientBackground from './components/AmbientBackground/AmbientBackground';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 2.5 seconds (to show off the neat animation)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
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
    <div className={`app ${loading ? 'app-loading' : ''}`}>
      {/* Premium Loader Overlay */}
      <Loader isLoading={loading} />

      {/* Global Interactive Elements */}
      <CustomCursor />

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
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
