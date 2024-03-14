const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'dev5602.d19p3rgknm7vr.amplifyapp.com', // static
      },
      {
        protocol: 'https',
        hostname: 'https://dd04hxjrw6b1a.cloudfront.net', // sst
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
    ],
    minimumCacheTTL: process.env.NODE_ENV !== 'production' ? 60 : 86400, // 1 day
  },
  redirects: async () => [
    {
      source: '/blog/next.js/:path*',
      destination: '/blog/nextjs/:path*',
      permanent: true,
    },
  ],
  // output: 'export',
  experimental: {
    mdxRs: false,
  },
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

module.exports = withContentlayer(nextConfig);
