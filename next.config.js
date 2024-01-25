/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {
      common: {
        name: 'common',
        chunks: 'all',
      }
    }

    return config;
  }
}

module.exports = nextConfig
