import React, { useRef } from 'react';
// We are not using framer-motion as it is not available in the environment
// but the code is structured to easily integrate it.

interface ParallaxCardProps {
  src: string;
  alt: string;
  title: string;
}

// In a real project with Framer Motion, this would have parallax logic
const ParallaxCard: React.FC<ParallaxCardProps> = ({ src, alt, title }) => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <div className="aspect-video bg-white/5 rounded-lg border border-white/10 overflow-hidden shadow-2xl">
        <img src={src} alt={alt} className="w-full h-full object-fit" />
      </div>
    </div>
  );
};


const galleryItems = [
  {
    id: 1,
    title: "Threat Modeling Canvas",
    src: "/assets/Threads.png",
    alt: "Screenshot of the Threat Modeling Canvas in Tara-Fusion",
  },
  {
    id: 2,
    title: "Risk Assessment Dashboard",
    src: "/assets/Risks.png",
    alt: "Screenshot of the Risk Assessment Dashboard",
  },
  {
    id: 3,
    title: "Detailed Report View",
    src: "/assets/project-summary.png",
    alt: "Screenshot of a generated report",
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-32 bg-brand-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Visualize Your Workflow</h2>
          <p className="mt-4 text-lg text-gray-400">
            From high-level dashboards to granular details, Tara-Fusion presents complex data in a clear, actionable way.
          </p>
        </div>
        <div className="space-y-24">
          {galleryItems.map((item) => (
            <ParallaxCard
              key={item.id}
              src={item.src}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-gray-500">
           Note: Images are for illustrative purposes only and may not reflect the final product.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
