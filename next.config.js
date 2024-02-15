const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ppr: true,
  },
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = withContentlayer(nextConfig);
