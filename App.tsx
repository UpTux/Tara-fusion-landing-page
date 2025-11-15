import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Showcase from './sections/Showcase';
import Gallery from './sections/Gallery';
import Workflow from './sections/Workflow';
import Signup from './sections/Signup';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-gray-200 font-sans antialiased relative overflow-x-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 animate-aurora bg-[radial-gradient(125%_125%_at_50%_10%,#0a0a1a_40%,#63e_100%)] bg-[size:200%_200%]"></div>
      
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Gallery />
        <Workflow />
        <Signup />
      </main>
      <Footer />
    </div>
  );
};

export default App;