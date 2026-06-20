import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.craftedminds.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
    ],
  },
}



export default nextConfig
