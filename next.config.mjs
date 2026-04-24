/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-shopaver-uat.s3.amazonaws.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/services/:path*",
        destination: "/service/:path*",
      },
    ];
  },
};

export default nextConfig;
