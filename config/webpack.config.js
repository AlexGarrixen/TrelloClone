const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cssnano = require('cssnano');
const { resolve } = require('path');
const root = process.cwd();

const jsRegex = /\.js$/;
const scssRegex = /\.scss$/;
const filesRegex = /\.(png|jpe?g|gif|svg)$/;

module.exports = {
  mode: 'production',
  devtool: false,
  entry: resolve(root, 'src/index.js'),
  output: {
    path: resolve(root, 'public'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: jsRegex,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: scssRegex,
        use: [
          MiniCssPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: filesRegex,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [resolve(root, 'public')],
    }),
    new HtmlWebpackPlugin({
      template: resolve(root, 'static/index.html'),
      filename: 'index.html',
      favicon: resolve(root, 'static/images/Logo-small.svg'),
    }),
    new MiniCssPlugin({
      filename: 'css/[name].[hash].css',
    }),
    new OptimizeCssPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
    new DotEnvPlugin({
      path: resolve(root, '.env'),
      safe: true,
    }),
  ],
};
