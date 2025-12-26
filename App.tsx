
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import ProjectSpotlight from './components/ProjectSpotlight';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Process />
        <ProjectSpotlight />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
