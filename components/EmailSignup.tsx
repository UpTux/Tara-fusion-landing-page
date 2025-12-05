'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { config } from '@/lib/config';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    if (!consentGiven) {
      setStatus('error');
      setMessage('Please confirm that you agree to our Privacy Policy.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      if (!config.mailerliteApiToken) {
        throw new Error('Configuration error. Please contact support.');
      }

      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.mailerliteApiToken}`,
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Subscription failed with status ${response.status}`);
      }

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
      <div className="mt-4 flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-brand-accent/50 transition-colors duration-200">
        <div className="relative flex-shrink-0 mt-1">
          <input
            id="consent-checkbox"
            type="checkbox"
            checked={consentGiven}
            onChange={(e) => setConsentGiven(e.target.checked)}
            className="sr-only peer"
            disabled={status === 'loading'}
          />
          <label
            htmlFor="consent-checkbox"
            className="flex items-center justify-center w-5 h-5 border-2 border-white/30 rounded cursor-pointer transition-all duration-200 peer-checked:bg-brand-accent peer-checked:border-brand-accent peer-focus:ring-2 peer-focus:ring-brand-accent peer-focus:ring-offset-2 peer-focus:ring-offset-brand-dark hover:border-brand-accent/70 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
          >
            {consentGiven && (
              <svg
                className="w-3 h-3 text-brand-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </label>
        </div>
        <label htmlFor="consent-checkbox" className="text-sm text-gray-300 cursor-pointer leading-relaxed">
          I agree that my email address will be stored until the release of Tara-Fusion to receive updates about important development milestones. For more information, please see our{' '}
          <Link href="/privacy" className="text-brand-accent hover:text-brand-accent-dark underline decoration-brand-accent/50 hover:decoration-brand-accent transition-colors duration-200" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
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
