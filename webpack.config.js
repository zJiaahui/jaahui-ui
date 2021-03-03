const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "./src/index.js", // string | object | array  // 这里应用程序开始执行
    // webpack 开始打包
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    },
    module: {
        rules: [{
            //匹配哪些文件
            test: /\.css$/,
            //use数组中loader执行循序为从右到左，从下到上
            use: [
                //创建style标签，将js中的样式资源插入，添加到head中生效
                'style-loader',
                //将css文件变成commonjs模块加载到js中，里面内容是样式字符串
                'css-loader']
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            //复制'./src/index.html'文件，并自动引入打包输出的资源文件（js/css）
            template: './src/index.html',
        })
    ]
}