/** @type {import('next').NextConfig} */

const webpack = require("webpack");

const nextConfig = {
  output: 'export',  // Add this for static export
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Required for static export
    domains: ['firebasestorage.googleapis.com'],
    // quality: 100
  },
  swcMinify: true,
  trailingSlash: true,  // Recommended for static hosting
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }));
    return config;
  },
};

module.exports = nextConfig