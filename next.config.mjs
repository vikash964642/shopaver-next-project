/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // if using App Router
  },
  images: {
    domains: ["media-shopaver-uat.s3.amazonaws.com"],
  },
  // reactCompiler: true,
  // ✅ Required for Netlify static compatibility (optional but safe)
  // output: "export",

  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/about-us",
      },
      {
        source: "/contact",
        destination: "/contact-us",
      },
      {
        source: "/help",
        destination: "/help-center",
      },
    ];
  },
};

export default nextConfig;
