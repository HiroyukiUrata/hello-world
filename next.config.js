const webpack = require('webpack');

module.exports = {
  target: 'serverless',
  experimental: { nftTracing: true },
  reactStrictMode: true,
  webpack: config => {
  config.plugins.push(
    new webpack.DefinePlugin({
    CESIUM_BASE_URL: JSON.stringify('cesium'),
    }),
  );
  return config;
  }
}