import React from 'react';
import {
  ShieldCheckIcon,
  WorkflowIcon,
  EyeIcon,
  CarIcon,
  FileTextIcon,
  UsersIcon
} from '../components/IconComponents';

const features = [
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-brand-accent" />,
    title: 'Automated Risk Evaluation',
    description: 'Leverage intelligent algorithms to automatically calculate risk levels based on industry standards like ISO 21434.',
  },
  {
    icon: <WorkflowIcon className="w-8 h-8 text-brand-accent" />,
    title: 'Threat Modeling Workflow',
    description: 'A guided, intuitive workflow for identifying threats, attack paths, and potential damage scenarios from start to finish.',
  },
  {
    icon: <EyeIcon className="w-8 h-8 text-brand-accent" />,
    title: 'Multi-Perspective Analysis',
    description: 'Analyze system architecture from various viewpoints including functional, logical, and network perspectives.',
  },
  {
    icon: <CarIcon className="w-8 h-8 text-brand-accent" />,
    title: 'Automotive-Specific Controls',
    description: 'Access a comprehensive, up-to-date database of security controls tailored for the automotive domain.',
  },
  {
    icon: <FileTextIcon className="w-8 h-8 text-brand-accent" />,
    title: 'Report Generation & Export',
    description: 'Instantly generate professional, compliant TARA reports in various formats for stakeholders and auditors.',
  },
  {
    icon: <UsersIcon className="w-8 h-8 text-brand-accent" />,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team in real-time, with version history, comments, and role-based access control.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Engineered for Automotive Cybersecurity</h2>
          <p className="mt-4 text-lg text-gray-400">
            Tara-Fusion provides everything you need to conduct a thorough and efficient Threat Assessment and Risk Analysis.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl p-8 transition-all duration-300 hover:border-brand-accent/50 hover:-translate-y-2 hover:shadow-glow">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-brand-accent/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
