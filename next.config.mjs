// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
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