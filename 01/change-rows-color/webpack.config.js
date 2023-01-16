const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  devtool: 'nosources-source-map',
  //有development和production两种模式，开发模式不会压缩代码和注释
  mode: 'development',

  //entry指定要处理哪个文件, path.join(webpack.config.js文件根目录，文件相对路径)
  entry: path.join(__dirname, './src/index1.js'),
  output: {
    path:path.join(__dirname, './dist'),//输出文件存放路径
    filename : 'bundle.js'
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()],
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8008,
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
    ]
  },
  resolve: {
    alias: {
      //配置@代表src目录
      '@': path.join(__dirname, './src/')
    }
  }
}
