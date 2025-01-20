/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-inventorydashboard.s3.eu-west-2.amazonaws.com", // For your product images
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3-inventorydashboard.s3.us-west-2.amazonaws.com", // For other S3 images (if applicable)
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
