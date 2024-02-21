const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'dev5602.d19p3rgknm7vr.amplifyapp.com',
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
  output: 'export',
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  swcMinify: true,
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

module.exports = withContentlayer(nextConfig);
