/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    }
}

module.exports = nextConfig
