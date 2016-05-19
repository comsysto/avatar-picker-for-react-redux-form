var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./js/main.jsx",

  output: {
    path: __dirname + "/generated/",
    filename: "app.js"
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' } /* inline base64 URLs for <=8k images, direct URLs for the rest */
    ]
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.jsx', '.css']
  },

  postcss: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
