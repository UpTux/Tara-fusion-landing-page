import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment configuration
  basePath: '/Tara-fusion-landing-page',
  assetPrefix: '/Tara-fusion-landing-page',
};

export default nextConfig;
