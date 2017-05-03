var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');  // 生成html文件

var projectName = "leaflet-demo";
var assetsFolder = '/assets/' + projectName + '/';
var templateFolder = '/template/' + projectName + '/';
// 定义当前是否处于开发debug阶段
var isDebug = JSON.stringify(JSON.parse(process.env.DEBUG || 'false'));

// 根据isDebug变量定义相关config变量
var configVarObj = {};
if(isDebug === 'true') {
    console.log('I am in debuging............');
    configVarObj = {
        htmlPath: 'index.html',  // 定义输出html文件路径
        // devtool: 'cheap-source-map' // 生成sourcemap,便于开发调试
        devtool: 'eval' // 生成sourcemap,便于开发调试
    };
} else {
    console.log('I am in releasing............');
    configVarObj = {
        htmlPath: /*'./template/' + projectName +*/ '/index.html',  // 定义输出html文件路径
        devtool: ''
    };
}

module.exports = {
    context: path.join(__dirname, 'app'),
    entry:{
        page: "./index.js"
    },
    output: {
          // 文件输出目录
        path: path.resolve(__dirname, 'output'),
        // 输出文件名
        filename: /*assetsFolder +'js/'+*/ '[name].min.js?[hash]',
        // cmd、amd异步加载脚本配置名称
        // chunkFilename: templateFolder + 'js/[name].chunk.js?[hash]',
        publicPath: ''
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },//支持es6
            // { test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] } }, //同时支持es6 react
            {test: /\.(png|jpg|svg|gif)$/, loader: 'url-loader?limit=8192'},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }, //sass加载器
            {  test: /\.json$/,exclude: /node_modules/,loader: 'json-loader'},
        ],
        // noParse: [path.join(__dirname, "dist/leaflet-src.js")]
    },
    resolve: {
      extensions: ['.js', '.json']
    },
    
    plugins: [
        // new webpack.NoErrorsPlugin(), //允许错误不打断程序
        new HtmlwebpackPlugin({
            title:"leaflet-demo",
            template:path.join(__dirname,'./app/index.html'),
            filename:configVarObj.htmlPath,//最后编译的index.html文件路径
            minify: {
               minifyJS: true,
               removeComments: true,
               minifyCSS: true
            }
        }),
        new webpack.DefinePlugin({
            __DEV__:isDebug
        }),
        new webpack.ProvidePlugin({
            
        })
    ],
    devtool: configVarObj.devtool
};
