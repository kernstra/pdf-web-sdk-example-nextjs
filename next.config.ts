import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Puts the license key into the browser bundle (it is public by design:
  // a production key runs only on the domains it names).
  env: { KERNSTRA_LICENSE: process.env.KERNSTRA_LICENSE },
};

export default nextConfig;
