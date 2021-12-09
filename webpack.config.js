const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
   entry : ['@babel/polyfill', './src/index.js'],
   output: {
    path: path.resolve(__dirname, './dist'),
       filename: 'bundle.js'
   },
   devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
   plugins: [new HtmlWebpackPlugin({
       filename: 'index.html',
       template: './src/index.html'
   })],
   resolve: {
       extensions: ['.js']
   },
   module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}