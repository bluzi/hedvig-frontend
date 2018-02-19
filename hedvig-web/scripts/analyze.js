const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

process.env.NODE_ENV = 'production';

const config = require('../config/webpack.config.prod')
config.plugins.push(new BundleAnalyzerPlugin());
const compiler = webpack(config);

compiler.run((error, stats) => {
  if (error) {
    throw new Error(error);
  }
});
