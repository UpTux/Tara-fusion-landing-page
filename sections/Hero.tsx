import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-center text-white px-6">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/techbg/1920/1080')`,
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark/50 via-brand-dark to-brand-dark" aria-hidden="true" />
      
      <div className="relative z-10 p-8 md:p-12 rounded-xl glass-card max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Tara-Fusion — <br className="hidden md:block"/>Next-Generation Automotive <br className="hidden md:block"/><span className="text-brand-accent">Threat & Risk Analysis</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Streamline your TARA process with an intelligent, automotive-focused platform designed for precision, compliance, and collaborative security.
        </p>
        <div className="mt-10">
          <a
            href="#signup"
            onClick={(e) => handleScrollTo(e, 'signup')}
            className="inline-block px-8 py-4 text-lg font-bold text-brand-dark bg-brand-accent rounded-md hover:bg-brand-accent-dark shadow-glow transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
          >
            Notify me at launch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;