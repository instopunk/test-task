import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://test.v1.auth-bridge.rbc.ru/:path*/`,
      },
    ];
  },
};

export default nextConfig;
