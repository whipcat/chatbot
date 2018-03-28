const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProd = true

let plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jquery: 'jquery'
  }),
  new HtmlWebpackPlugin({
    title: 'Johnny List',
    template: `${path.join(__dirname, './client')}/index.ejs`,
    production: isProd,
    inject: true
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new ExtractTextPlugin({
    filename: '[hash].css',
    allChunks: true
  })
]

module.exports = function (env) {
  return {
    devtool: 'source-map',
    context: path.join(__dirname, './client'),
    entry: {
      js: 'index'
    },
    output: {
      path: path.join(__dirname, './static'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [ {
        test: /\.html$/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                require.resolve('babel-preset-es2015'),
                require.resolve('babel-preset-react'),
                require.resolve('babel-preset-stage-1')
              ],
              plugins: [
                require.resolve('babel-plugin-transform-runtime'),
                require.resolve('babel-plugin-react-html-attrs')
              ],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        path.join(__dirname, './client'),
        'node_modules'
      ],
      alias: {jquery: 'jquery/dist/jquery'}

    },
    plugins: plugins,
    devServer: {
      contentBase: './client',
      historyApiFallback: true,
      port: '3000',
      hot: true,
      compress: isProd,
      stats: { colors: true }
    }
  }
}
