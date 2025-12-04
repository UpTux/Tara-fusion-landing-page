'use client';

import React, { useState, useRef, useCallback } from 'react';

interface ThemeCompareProps {
  lightImage: string;
  darkImage: string;
}

const ThemeCompare: React.FC<ThemeCompareProps> = ({ lightImage, darkImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden rounded-lg shadow-2xl select-none cursor-ew-resize group border-2 border-white/10"
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      <img src={lightImage} alt="Tara-Fusion Light Mode" className="absolute inset-0 w-full h-full object-cover object-left" draggable="false" />
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={darkImage} alt="Tara-Fusion Dark Mode" className="absolute inset-0 w-full h-full object-cover object-left" draggable="false" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-brand-accent cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center shadow-glow-sm transition-transform duration-200 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
       <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-sm font-semibold"style={{ opacity: sliderPosition < 50 ? 1 : 0, transition: 'opacity 0.3s' }}>Light Mode</div>
       <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 rounded-full text-sm font-semibold" style={{ opacity: sliderPosition > 50 ? 1 : 0, transition: 'opacity 0.3s' }}>Dark Mode</div>
    </div>
  );
};

export default ThemeCompare;
