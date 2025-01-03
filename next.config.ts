import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
