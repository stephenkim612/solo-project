const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    }
  },
  // proxy: "http://localhost:3000",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          'css-loader'
        ]
      }
    ]
  }
}