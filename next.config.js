// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  output: 'export',
  images: {
    unoptimized: true
  }

  // basePath: '/yingcholocate.github.io/'
}

module.exports = nextConfig
