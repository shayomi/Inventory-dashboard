/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://s3-inventorydashboard.s3.eu-west-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
