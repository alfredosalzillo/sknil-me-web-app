/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: true,
        optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    }
}

module.exports = nextConfig
