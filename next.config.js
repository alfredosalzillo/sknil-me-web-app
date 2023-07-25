// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('node:path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
  },
};

module.exports = nextConfig;
