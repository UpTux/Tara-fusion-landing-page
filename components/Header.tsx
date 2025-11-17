import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to signup section if on main page, otherwise navigate and scroll after navigation
  const handleGetNotified = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('signup');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { replace: false });
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById('signup');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, navigate]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-glass/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2" style={{ textDecoration: 'none' }}>
            <img src="/assets/TaraFusionIcon.svg" alt="UpTux Logo" width={48} height={48} />
            <h1 className="text-xl font-bold text-white">Tara-Fusion</h1>
            <span className=""><sub>by UpTux</sub></span>
          </Link>
        </div>
        <nav>
          <a
            href="#signup"
            onClick={handleGetNotified}
            className="px-4 py-2 text-sm font-semibold text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent"
          >
            Get Notified
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;