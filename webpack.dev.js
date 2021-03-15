const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      //复制'./src/index.html'文件，并自动引入打包输出的资源文件（js/css）
      template: './src/index.html',
    }),
  ],
  devServer: {
    //自动运行项目目录（构建后的目录）
    contentBase: path.resolve(__dirname, 'dist'),
    //启动gzip压缩（让代码体积更小速度更快）
    compress: true,
    //指定运行的端口号
    port: 3001,
    //打开默认浏览器
    open: true
  }
});