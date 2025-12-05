// This file is processed at build time by Next.js
// Environment variables are embedded as string literals
export const config = {
  mailerliteApiToken: process.env.NEXT_PUBLIC_MAILERLITE_API_TOKEN || '',
} as const;
