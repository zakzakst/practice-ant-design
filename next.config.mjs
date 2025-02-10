/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/practice-ant-design",
  output: "export",
  // SSGではnext/imageが利用できない。今回はunoptimizedで割愛
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
