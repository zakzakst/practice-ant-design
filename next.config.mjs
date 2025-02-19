/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  output: "export",
  // SSGではnext/imageが利用できない。今回はunoptimizedで割愛
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
