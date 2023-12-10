/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["159.223.186.223"],
  },
};

module.exports = nextConfig;
