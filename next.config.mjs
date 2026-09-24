/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development and production builds must never share compiled chunks.
  // Keeping them separate also isolates this app from a previously interrupted
  // default `.next` cache.
  distDir: process.env.NODE_ENV === 'development' ? '.next-workshop-dev' : '.next-workshop',
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/:city(chennai|hyderabad)',
        destination: '/',
      },
    ]
  }
};
export default nextConfig;
