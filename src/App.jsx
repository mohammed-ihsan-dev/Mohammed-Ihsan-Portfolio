import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MagneticCursor from './components/MagneticCursor';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="bg-dark min-h-screen text-gray-50 selection:bg-primary/30 selection:text-white font-sans relative overflow-x-hidden">

      <AnimatedBackground />

      <MagneticCursor />

      <div className="relative z-10 selection:bg-primary/30">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
