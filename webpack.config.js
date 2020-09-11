/*
 * @Author: your name
 * @Date: 2020-09-10 09:16:22
 * @LastEditTime: 2020-09-11 11:04:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-project\webpack.config.js
 */
const path = require('path');
const webpack = require('webpack');
// const { watch } = require('less');

module.exports = {
//   watch: true,
  mode:'development',
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'src'),
      filename: 'bundle.js'
      } ,
  module:{
      rules:[{ test: /\.js$/, use: 'babel-loader' },
      {test: /\.css$/, use: ['style-loader','css-loader']},
      { 
        test: /\.(png|jpg|gif|jpeg)$/,
        use: 'file-loader' 
    },
    { 
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader' 
    } ]
  },
  plugins:[
      new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    host:'localhost',
    port:'8080',
    open:true,  //自动拉起浏览器
    hot:true,   //热加载
    contentBase:'./index/components' // 内容目录
  }
  
};