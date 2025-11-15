import React from 'react';
import ThemeCompare from '../components/ThemeCompare';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Clarity in Every Detail</h2>
          <p className="mt-4 text-lg text-gray-400">
            A meticulously designed interface, available in both light and dark themes, to help you focus on what matters most.
          </p>
        </div>
        <div className="mt-16">
          <ThemeCompare
            lightImage="https://picsum.photos/seed/lightmode/1280/720"
            darkImage="https://picsum.photos/seed/darkmode/1280/720"
          />
        </div>
         <p className="text-center mt-4 text-sm text-gray-500">
           Drag the slider to compare themes. Note: These are placeholder images.
         </p>
      </div>
    </section>
  );
};

export default Showcase;
