import React, { useState, FormEvent } from 'react';
import { subscribeEmail } from '../utils/api';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await subscribeEmail(email);
      setStatus('success');
      setMessage("Thanks for your interest! We'll notify you at launch.");
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@company.com"
          aria-label="Email for launch notification"
          required
          className="flex-grow px-4 py-3 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow duration-200"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 font-bold text-brand-dark bg-brand-accent rounded-md hover:bg-brand-accent-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Submitting...' : 'Notify Me'}
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center text-sm ${
          status === 'success' ? 'text-brand-accent' :
          status === 'error' ? 'text-red-400' : ''
        }`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailSignup;
