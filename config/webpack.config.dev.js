const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const root = process.cwd();

const jsRegex = /\.js$/;
const scssRegex = /\.scss$/;
const filesRegex = /\.(png|jpe?g|gif|svg)$/;

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: resolve(root, 'src/index.js'),
  output: {
    path: resolve(root, 'dist/assets'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: resolve(root, 'dist'),
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: {
      error: true,
      warnings: true,
    },
    stats: 'errors-only',
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
          'style-loader',
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
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(root, 'static/index.html'),
      filename: 'index.html',
    }),
  ],
};
