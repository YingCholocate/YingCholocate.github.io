// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },

  images: {
    unoptimized: true
  },
  output: 'export',
  generateBuildId: async () => {
    // This ensures your application is not treated as a single page app.
    return 'not-single-page-app'
  }
  // basePath: '/yingcholocate.github.io/'
}

module.exports = nextConfig
