import React from 'react';
import EmailSignup from '../components/EmailSignup';

const Signup: React.FC = () => {
  return (
    <section id="signup" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(0,246,255,0.1)_0%,transparent_40%)]" aria-hidden="true" />
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Be the First to Know</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Join our mailing list to get notified when Tara-Fusion launches. No spam, just the important updates.
        </p>
        <div className="mt-10">
          <EmailSignup />
        </div>
      </div>
    </section>
  );
};

export default Signup;
