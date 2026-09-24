/** @type {import('next').NextConfig} */
const nextConfig = {

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
