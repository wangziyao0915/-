// ·Day 7 webpack
// 1.简述webpack模块打包原理
/**webpack根据webpack.config.js中的入口文件，在入口文件里识别模块依赖，
 * 不管这里的模块依赖是用CommonJS写的，还是ES6 Module规范写的，webpack会自动进行分析，
 * 并通过转换、编译代码，打包成最终的文件。最终文件中的模块实现是基于webpack自己实现的webpack_require（es5代码），
 * 所以打包后的文件可以跑在浏览器上。
 *  */




// 2.简述webpack loader

/**webpack 通过 loaders 解析 require 语句引入的文件。常用的 loader 有：

babel-loader js 文件编译
style-loader style 标签加载样式文件
css-loader 处理 css 文件
postcss-loader 处理样式
json-loader 处理 json 文件，2.x 版本不再需要
url-loader 处理图片字体等，合适的文件会被编译成 base64 URL，否则则使用 file-loader
file-loader 处理图片字体等，拿到文件的相对路径
raw-loader 读取文件，可以获得字符串内容
loader 的使用方法是在 webpack.config.js 配置，或者针对特定文件使用。

const path = require('path');
module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src')
                ],
                loaders: [
                    'babel-loader'
                ]
            }
        ]
    }
}
配置中几个字段的说明如下：

test: 用来判断文件是否使用本 loader 的正则，通常根据文件后缀区分
include: 包含的文件路径，数组形式的，wepback 只会在这些目录下找需要处理的文件
loaders: 数组的形式来表示符合条件的文件需要使用哪些 loader 进行处理
loader: 字符串的形式串联起来多个 loader
loader 可以串联使用，比如 less 文件需要先使用 less-loader，再使用 css-loader，最后使用 style-loader。

在配置中 loaders 的书写顺序是：

const path = require('path');
module.exports = {
    module: {
        loaders: [
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, './src')
                ],
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}
loader 中的参数可以通过在 loader 名称后追加，比如在 css-loader 中开启 css module 的写法是 css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!。

针对特定文件使用 loader 需要修改代码中的 require 语句。比如对特定的 css 文件不使用 css module。

import '!!style-loader!css-loader!../css/index.css';
require('!!style-loader!css-loader!../css/index.css');
在 require 前添加 !! 用来禁用所有在 config 中配置的 loader。

在 1.x 的 wepback 中可以省略 loader 名称中后面的 -loader，但是 2.x 中不能省略。

作者：vivaxy
链接：https://www.jianshu.com/p/a62b478d5b7a
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */


// 3.Webpack一些常用的自定义配置
const path = require('path')
module.exports = {
    // 入口文件
    entry: __dirname + '/src/index.js',
    // 出口文件
    output: {
        // 打包出去文件夹的目录以及文件名称
        path: path.resolve(__dirname, 'distTwo'),
        // 打包出去文件名字
        filename: 'a.js'
    },
    // Loaders
    module: {
        // 规则列表，它是一个数组，所有的loader都写在这里
        rules: [
            {
                test: /\.(css|scss)$/,
                // loader: 'style-loader!css-loader',
                use: ['style-loader', 'css-loader','sass-loader'],
                // 匹配除了正则里面的内容
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                      //  如果limit设置的值小于图片的大小图片原样输出，如果大于则编译为Base64格式
                      limit: 1024,
                      name: '[name].[ext]'
                    }
                  }],
                // 匹配除了正则里面的内容
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader'
                }],
                // 匹配除了正则里面的内容
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development'
}




// 4.开发和生产环境的构建配置差异，如何优化webpack构建速度


/**开发和生产环境的构建配置差异：
生产环境可能需要分离 CSS 成单独的文件，以便多个页面共享同一个 CSS 文件
生产环境需要压缩 HTML/CSS/JS 代码
生产环境需要压缩图片
开发环境需要生成 sourcemap 文件
开发环境需要打印 debug 信息
开发环境需要 live reload 或者 hot reload 的功能 
*/


/**如何优化webpack构建速度：
减少构建的文件，减小文件大小：项目中存在太多的无用的文件和代码，先删除这些无用的东西
移除 CommonsChunkPlugin
Search with Google
我在网上找到了许多相关的问题，关键性的建议有以下几个：

将 css-loader 的版本回溯到 0.15 及其以前的版本

使用 HappyPack

使用 DllPlugin

作者：Hsugar
链接：https://www.jianshu.com/p/2854ce09b5eb
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */






