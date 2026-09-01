import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /** Dead internal links fail the build instead of shipping as 404s. */
  typedRoutes: true,

  images: {
    /**
     * Club photography is local, so no remote hosts are allowed. Leaving this
     * open (`hostname: '**'`) turns the Next image optimizer into a proxy for
     * any HTTPS URL on the internet.
     */
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
