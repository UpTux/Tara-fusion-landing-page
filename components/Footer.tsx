import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} UpTux. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
          <a href="/impressum" className="hover:text-brand-accent transition-colors">Impressum</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
