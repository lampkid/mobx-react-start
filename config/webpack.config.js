const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '../'); //基本的环境定义

function getFileAbsolutePath(filePath) {
    return path.resolve(ROOT_DIR, filePath);
}


module.exports = {
  context: ROOT_DIR, // context 对entry的路径不起作用
  entry: {
      main: [getFileAbsolutePath('src/index.js')],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // html页面压缩
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
    },
  },

  plugins: [
    // 本地调试页面配置
    new HtmlWebPackPlugin({
      template: "./config/template.html",
      filename: 'index.html',
      chunks: ['main'],
      inject: 'body'
    }),
    

    // css抽取配置
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    //一些预置库定义
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),

  ]
};
