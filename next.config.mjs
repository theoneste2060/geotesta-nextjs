/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  // Old *.html links keep working
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:slug.html', destination: '/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
