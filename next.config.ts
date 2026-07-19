import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    minimumCacheTTL: 0,

    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3002",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.craftedminds.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig