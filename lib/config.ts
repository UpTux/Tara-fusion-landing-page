// This file is processed at build time by Next.js
// Environment variables are embedded as string literals

if (!process.env.NEXT_PUBLIC_MAILERLITE_API_TOKEN) {
  console.warn('Warning: NEXT_PUBLIC_MAILERLITE_API_TOKEN environment variable is not set');
}

export const config = {
  mailerliteApiToken: process.env.NEXT_PUBLIC_MAILERLITE_API_TOKEN || '',
} as const;
