/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.NEXT_EXPORT === 'true' ? 'export' : undefined,
  basePath: process.env.NEXT_BASE_PATH || '',
  trailingSlash: true,
  images: {
    unoptimized: process.env.NEXT_EXPORT === 'true',
  },
}

module.exports = nextConfig
