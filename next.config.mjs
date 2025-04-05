/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  output: "export",
  // SSGではnext/imageが利用できない。今回はunoptimizedで割愛
  images: {
    unoptimized: true,
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     // next server build => ignore msw/browser
  //     if (Array.isArray(config.resolve.alias)) {
  //       config.resolve.alias.push({
  //         name: "msw/browser",
  //         alias: false,
  //       });
  //     } else {
  //       config.resolve.alias["msw/browser"] = false;
  //     }
  //   } else {
  //     // browser => ignore msw/node
  //     if (Array.isArray(config.resolve.alias)) {
  //       config.resolve.alias.push({ name: "msw/node", alias: false });
  //     } else {
  //       config.resolve.alias["msw/node"] = false;
  //     }
  //   }
  //   return config;
  // },
};

export default nextConfig;
