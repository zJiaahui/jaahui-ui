const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {
    mode: 'production',
    entry: {
        app: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'lib'),
        clean: true,
    },
});