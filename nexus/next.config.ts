/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    QLOO_API_KEY: process.env.QLOO_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
};

export default nextConfig;
