const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        index: './index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib'),
        library: 'jiaahui-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    // externals: {
    //     vue: {
    //         root: 'Vue',
    //         commonjs: 'vue',
    //         commonjs2: 'vue',
    //         amd: 'vue'
    //     }
    // },
});