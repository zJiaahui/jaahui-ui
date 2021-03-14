const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
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