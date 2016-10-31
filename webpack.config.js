var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/js/main.js'
    ]
  },
  output: {
    path: './dist/assets',
    filename: 'js/main.js',
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