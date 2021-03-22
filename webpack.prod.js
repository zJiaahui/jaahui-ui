const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        app: './index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'lib'),
        // clean: true,
    },
});