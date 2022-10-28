/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_BASE_URL: "https://api.thaistock2d.com",
  },
};

module.exports = nextConfig;
