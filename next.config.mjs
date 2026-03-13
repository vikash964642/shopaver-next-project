// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media-shopaver-uat.s3.amazonaws.com"],
  },
  reactCompiler: true,

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