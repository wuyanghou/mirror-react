// webpack.dll.conf.js
const webpack = require('webpack');
const path = require('path')

const vendors = [
 'jquery',
  'react',
  'antd'
];
module.exports = {
  // 读取library.entry 里配置的node_module
  entry:{
    vendor: vendors,
  },
  // 输出到static文件夹下面， 补充知识[vue项目目录之static]
  output: {
    path: __dirname,
    filename: '[name].[hash].js',
    library: '[name]_[hash]',
  },
  plugins: [
    // 文件输出到 ./build/manifest.json 中
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_[hash]',
      context: __dirname,
    }),
    // 压缩打包的文件
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
};
