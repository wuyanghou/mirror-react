const path = require('path')
const webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, dir)
}

const config = {
  // in development,
  // 'webpack-dev-server/client' and 'webpac/hot/dev-server' will be automatically added
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src'),
      '@static': resolve('static'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      // {
      //   test:/\.less$/,
      //   include: [/node_modules/],
      //   use:[
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //     },
      //     {
      //       loader: 'less-loader',
      //     }
      //   ]
      // },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options:{
              modules:true,
              importLoaders:1,
              localIdentName:'[local]_[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {

  config.devtool = ''

  // Exclude react and react-dom in the production bundle
  config.externals = {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
  config.plugins = [
    new webpack.DllReferencePlugin({
      context:__dirname,
      manifest: require('./manifest.json')
    })
  ]

} else {

  config.devtool = ''

  config.devServer = {
    contentBase: path.resolve(__dirname),
    clientLogLevel: 'none',
    quiet: true,
    port: 8000,
    compress: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    },
    proxy: {
      '/api': {
        // target: 'https://other-server.example.com',
        // secure: false
      }
    }
  }

  // HMR support
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DllReferencePlugin({
      context:__dirname,
      manifest: require('./manifest.json')
    })
  ]
}

module.exports = config
