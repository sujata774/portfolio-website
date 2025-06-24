// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'flatirons.com',
      'encrypted-tbn0.gstatic.com'
      // add more domains here if you use other external images
    ],
  },
};

module.exports = nextConfig;
