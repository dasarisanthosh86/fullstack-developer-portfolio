import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
