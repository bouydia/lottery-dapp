import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'effigy.im',
        port: '',
        pathname: '/a/**',
      },
    ],
  },
}

export default nextConfig
