/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      }
    ]
  },
  video: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'videos.ctfassets.net',
        port: '',
      }
    ]
  }
}

module.exports = nextConfig
