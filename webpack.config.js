var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/js/core/main.js'
    ],
    home: [
      './src/js/pages/home.js'
    ],
    data: [
      './src/js/pages/data.js'
    ],
    tool: [
      './src/js/pages/tool.js'
    ],
    application: [
      './src/js/pages/application.js'
    ],
    signin: [
      './src/js/pages/signin.js'
    ]
  },
  output: {
    path: './dist/assets',
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map'
};