const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  redirects: async () => [
    {
      source: '/blog/next.js/:path*',
      destination: '/blog/nextjs/:path*',
      permanent: true,
    },
  ],
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  swcMinify: true,
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

module.exports = withContentlayer(nextConfig);
